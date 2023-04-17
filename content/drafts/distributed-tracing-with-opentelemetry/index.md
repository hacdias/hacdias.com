---
title: Distributed Tracing with Open Telemetry
draft: true
date: 2023-04-08T20:32:22.388293831+02:00
tags:
- example
---

Recently, I have been working with Open Telemetry tracing at work, namely on adding
tracing support to multiple web services in order to understand where time is being spent.
Since it has been quite an interesting experience, I decided it could be a great idea
to write about it, with a tiny demo.

<!--more-->

Essentially, [Open Telemetry](https://opentelemetry.io/) (OTel) is a framework for observability,
that is, specifications and tools that help you to generate and capture telemetry data.
There are implementations in different languages, but today I will be exemplifying how to add
OTel to a Go application with [`opentelemetry-go`](https://github.com/open-telemetry/opentelemetry-go).

For this demo, we will be creating two different web services:

1. Service A will take an HTTP request body and reply with the reverse data.
2. Service B will take the URL query and forward it as body to service A.

Before building this simple HTTP handlers, we will first set up the tracing in both of
our applications. 

`common/tracing.go`

```go
package common

import (
	"context"
	"fmt"

	"go.opentelemetry.io/contrib/propagators/autoprop"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/jaeger"
	"go.opentelemetry.io/otel/sdk/resource"
	"go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.4.0"
)

func SetupTracing(ctx context.Context, serviceName string) error {
	tp, err := NewTracerProvider(ctx, serviceName)
	if err != nil {
		return err
	}

	// Sets the default trace provider for this process. If this is not done, tracing
	// will not be enabled. Please note that this will apply to the entire process
	// as it is set as the default tracer, as per OTel recommendations.
	otel.SetTracerProvider(tp)

	// Configures the default propagators used by the Open Telemetry library. By
	// using autoprop.NewTextMapPropagator, we ensure the value of the environmental
	// variable OTEL_PROPAGATORS is respected, if set. By default, Trace Context
	// and Baggage are used. More details on:
	// https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/sdk-environment-variables.md
	otel.SetTextMapPropagator(autoprop.NewTextMapPropagator())

	return nil
}

func NewTracerProvider(ctx context.Context, serviceName string) (*trace.TracerProvider, error) {
	exporter, err := jaeger.New(jaeger.WithCollectorEndpoint())
	if err != nil {
		return nil, fmt.Errorf("building Jaeger exporter: %w", err)
	}

	options := []trace.TracerProviderOption{
		trace.WithBatcher(exporter),
	}

	r, err := resource.Merge(
		resource.Default(),
		resource.NewSchemaless(
			semconv.ServiceNameKey.String(serviceName),
		),
	)
	if err != nil {
		return nil, err
	}
	options = append(options, trace.WithResource(r))
	return trace.NewTracerProvider(options...), nil
}
```

`reverse/main.go`

```go
package main

import (
	"context"
	"io"
	"log"
	"net/http"
	"otel-demo/common"

	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/trace"
)

var tracer trace.Tracer

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	tracer = otel.Tracer("reverse-microservice")

	common.SetupTracing(ctx, "Reverse Microservice")

	handler := reverseHandler()
	handler = otelhttp.NewHandler(handler, "Reverse Handler")

	log.Print("starting reverse")
	err := http.ListenAndServe(":8081", handler)
	if err != nil {
		log.Fatal(err)
	}
}

func reverseHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		body, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		str := reverse(r.Context(), string(body))
		_, _ = w.Write([]byte(str))
	})
}

func reverse(ctx context.Context, str string) string {
	ctx, span := tracer.Start(ctx, "Reverse Function")
	defer span.End()

	if str == "" {
		return ""
	}
	runes := []rune(str)
	return reverse(ctx, string(runes[1:])) + string(runes[0])
}
```

`capybara/main.go`

```go
package main

import (
	"context"
	"io"
	"log"
	"net/http"
	"otel-demo/common"
	"strings"

	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	common.SetupTracing(ctx, "Capybara Microservice")

	handler := contactReverseHandler("http://127.0.0.1:8081/")
	handler = otelhttp.NewHandler(handler, "Capybara Handler")

	log.Print("starting capybara")
	err := http.ListenAndServe(":8080", handler)
	if err != nil {
		log.Fatal(err)
	}
}

func contactReverseHandler(endpoint string) http.Handler {
	httpClient := &http.Client{
		Transport: otelhttp.NewTransport(http.DefaultTransport),
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query().Get("text")
		if query == "" {
			http.Error(w, "query text is empty", http.StatusBadRequest)
			return
		}

		req, err := http.NewRequestWithContext(r.Context(), http.MethodGet, endpoint, strings.NewReader(query))
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		res, err := httpClient.Do(req)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		_, _ = io.Copy(w, res.Body)
	})
}
```


```console
docker run --rm -it --name jaeger \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -p 5775:5775/udp \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 14250:14250 \
  -p 9411:9411 \
  jaegertracing/all-in-one
```

```console
> curl "http://127.0.0.1:8080/?text=capybara"
arabypac
```

![](cdn:/22c7f58abe40d22f022d8f49a3f354f00507ffaaab07323b536705ed0fbce140?class=fw)


see spec: https://www.w3.org/TR/trace-context

```
version-format   = trace-id "-" parent-id "-" trace-flags
trace-id         = 32HEXDIGLC  ; 16 bytes array identifier. All zeroes forbidden
parent-id        = 16HEXDIGLC  ; 8 bytes array identifier. All zeroes forbidden
trace-flags      = 2HEXDIGLC   ; 8 bit flags. Currently, only one bit is used. See below for details
```


```
trace_id="$(cat /dev/urandom | gtr -dc 'a-f0-9' | fold -w 32 | head -n 1)"
parent_id="00$(cat /dev/urandom | gtr -dc 'a-f0-9' | fold -w 14 | head -n 1)"
trace_parent="00-$trace_id-$parent_id-01"
```

```
echo $trace_parent
00-8ef0da10cfb0183cdf8fcbe89b778bf6-0040a998f29eaaa3-01
curl -H "Traceparent: 00-8ef0da10cfb0183cdf8fcbe89b778bf6-0040a998f29eaaa3-01" "http://127.0.0.1:8080/?text=capybara"
arabypac
```


https://www.w3.org/TR/baggage/

https://www.w3.org/TR/trace-context/

