---
type: post
author:         "Henrique Dias"
title:          "5 truques e dicas em PHP"
date:           2014-08-29 16:47:20+00:00
description:    "A linguagem de programação PHP é das mais utilizadas atualmente do lado do servidor. Hoje trazemos 5 dicas que para vos ajudar!"

color: "#1f1f29"
tags:
- Dicas
- PHP
---

A linguagem de programação PHP é das mais utilizadas atualmente do lado do servidor quando o assunto são páginas web.

Para os iniciantes ou mesmo profissionais, aqui estão 5 simples e úteis truques e dicas para aplicarem quando estão a escrever em PHP.

{{< figure src="php5dicas.jpg" alt="5 truques e dicas em PHP" >}}

## 1. Utilizar o operador ternário


Nós já escrevemos um artigo sobre este operador que podem ver [aqui](/blog/operador-ternario/). Para laços (*loops*) simples, podemos utilizar o operador ternário de forma a poupar espaço como podem ver no exemplo seguinte:

{{< highlight php >}}
<?php //...

$n = rand(0,100);

if ($n > 50) {
    echo 'O número é maior que 50!';
} else {
    echo 'O número é menor que 50!';
}

//Utilizando o operador ternário ficaria:

echo ($n > 50) ? 'O número é maior que 50!' : 'O número é menor que 50!';

//O leitor Gustavo Rafael sugeriu uma forma mais simplificada:
echo 'O número é ' . (($n > 50) ? 'maior' : 'menor') . ' que 50!';
{{< / highlight >}}

## 2. Nunca mais te voltas a enganar nos `ifs`

Um erro muito cometido é atribuir um valor a uma variável dentro de uma condição ou seja, colocamos `$x = 1` ao invés de `$x == 1`.

O mais "engraçado" é que o PHP não dá erro e, por vezes, gastamos muito tempo à procura da fonte do problema.

Esta situação pode ser invertida colocando a variável na segunda posição. Assim, o PHP irá gerar um erro quando nos enganamos:

{{< highlight php >}}
<?php //...

//Não produz erro
if ( $userRole = 0 ) {
   echo 'Você é Administrador.';
}

//Produz erro
if ( 0 = $userRole ) {
   echo 'Você é Administrador.';
}
{{< / highlight >}}

O que acontece aqui, é que o PHP não nos vai deixar atribuir um valor a um valor (um pouco redundante), gerando erro.

## 3. Saber se o número é par ou ímpar

À primeira vista pode parecer algo muito pouco importante porém pode ser muito útil nas mais diversas situações.

Existe uma forma extremamente simples de saber se um número é par ou ímpar. Veja:

{{< highlight php >}}
<?php //...

$n = 1250;

// ex1
echo ($n & 1) ? "Ímpar" : "Par";

// ex2

if ($n & 1) {
  // o que fazer se o número for ímpar
} else {
  // o que fazer se o número for par
}
{{< / highlight >}}

## 4. Não deve utilizar funções dentro de laços

Quando utilizamos funções dentro de um laço, esta função é chamada sempre que o laço é executado tornando o tempo de execução mais lento. Exemplo:

{{< highlight php >}}
<?php //...

for ($i = 0; $i < count($array); $i) {
  //Sempre que este laço é executado, a função count() será chamada.
}
{{< / highlight >}}

## 5. Comparar 2 conjuntos de caracteres (`strings`)


Última mas não menos importante. Mais uma que pode parecer desnecessária, mas pode ser muito útil. Exemplo:

{{< highlight php >}}
<?php //...

$frase1 = 'Não se esqueçam de gostar a nossa página do Facebook';
$frase2 = 'Não se esqueçam de seguir a nossa página do Google+';

// criação da comparação
similar_text($frase1, $frase2, $howMuchEqual);

// a variável $hoeMuchEqual vai conter a percentagem de igualdade entre as duas frases.
// neste caso, $howMuchEqual será igual a 82.56880733945
{{< / highlight >}}

* * *

Como podem ver, as dicas mais simples podem vir a ser muito úteis.
