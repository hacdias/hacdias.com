---
type: post
author:         "Henrique Dias"
title:          "PHP - Devemos usar a tag de fechamento ou não?"
date:           2014-08-27 09:15:18+00:00
description:    "A tag de fechamento do PHP ( ?> ) pode causar alguma confusão visto que é omitida pela maioria dos desenvolvedores. Mas porquê?"
image: "php"
color: "#1f1f29"
categories:
- Explanations
tags:
- informação
- PHP
---

Recentemente comecei a reparar que muitos programadores omitiam a tag de fechamento dos ficheiros PHP e, obviamente, fiquei curioso.

Depois de uma pesquisa, trago-vos o **porquê** de não utilizar a tag ```?>``` no final dos ficheiros.

{{< figure src="/images/phptagfechamento.png" alt="PHP - Devemos usar a tag de fechamento ou não?" >}}

Em primeiro lugar, esta prática só deve ser realizada em ficheiros cujo seu conteúdo seja **somente PHP** e não contenha HTML, por exemplo.


## O que acontece se...?


Vamos começar por debater a pergunta que vocês vêm aí em cima: **o que acontece** se omitirmos a *tag* de fechamento.

A resposta é muito simples: se omitirmos a *tag* de fechamento de PHP, este irá tratar todos os espaços vazios e quebras de linha como caracteres "inúteis".

Agora, invertendo a pergunta, **o que acontece se utilizarmos a tag de fechamento**?

Se o fizermos, tudo o que se encontra depois dessa tag irá ser enviado para o browser e, além disso poderá haver problemas com os cabeçalhos HTTP.


## Como assim?


Existem diversas funções que utilizamos frequentemente no código como ```session_start()```, ```header()```, dentro de muitas outras que alteram estes cabeçalhos.

Ou seja, se alguém cometer qualquer descuido e colocar, simplesmente, diversas linhas em branco no ficheiro, poderá ocorrer um erro ao utilizar funções que utilizem os cabeçalhos.


## Assim...


Depois de eu próprio ter lido tudo isto descobri a solução a um grande problema que estava a ter:


> Cannot modify header information – headers already sent


Este erro leva-nos, por vezes, a grandes "buscas" sendo o problema simplesmente simples. E que tal, já sabiam desta pequena "dica"?

* * *

**Edição:** Criei um [Gist](https://gist.github.com/hacdias/aacf68dd880e9fb15447) no GitHub com alguns exemplos. Sintam-se livres para colaborar :)
