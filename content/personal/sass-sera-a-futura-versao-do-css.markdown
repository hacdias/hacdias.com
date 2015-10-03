---
type: post
author:         "Henrique Dias"
title:          "SASS - Será a futura versão do CSS?"
date: 2014-09-07 10:23:57+00:00
description:    "O SASS é, talvez, o melhor pré-processador de CSS que existe. Mas, será que continuará a ser apenas um pré-processador? Ou poderá vir a ser mais que isso?"
categories:
- Personal
tags:
- CSS
- Ferramentas
- SASS
- úteis
---

Atualmente, uma das grandes vertentes da programação é a web e esta está muito difundida. Os desenvolvedores web, têm que utilizar várias linguagens de vários tipos: programação, marcação e estilo.

A última versão do CSS _(Cascading Style Sheet)_, o CSS3, trouxe muitas melhorias e novidades tornando-se mais poderoso. **Mas será suficiente?**

![SASS - Será a futura versão do CSS?](/images/sass.jpg)

Atualmente, existem várias "alternativas" e pré-processadores de CSS, como [LESS](http://lesscss.org/) e SASS. Este último, tem vindo a crescer e muitos acreditam que poderá ser a **futura versão do CSS.**

O SASS está na versão 3.4.3 e toda a versão três é mais conhecida por SCSS ou seja, Sassy CSS. Para utilizar esta ferramenta é necessário terem Ruby instalado no vosso computador. Pode seguir as restantes [instruções aqui](http://sass-lang.com/install).

Aqui está um pequeno exemplo que compara CSS com SCSS.

{{< highlight sass >}}
/* CSS */

nav {
  color: blue;
  font-family: sans-serif;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}


nav li { display: inline-block; }

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
  color: red;
}

//O Mesmo em SCSS

$font-stack:    sans-serif;
$primary-color: blue;
$links-color:   red;

nav {
  color: $primary-color;
  font-family: $font-stack;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
    color: $links-color;
  }

}
{{< /highlight >}}

Sim, viram bem. Com SCSS podemos utilizar variáveis e também aninhar itens. Mas não acaba por aqui. Existem várias outras funcionalidades:


  * Importar ficheiros com ```@import 'nome'```;
  * Mixins;
  * Herança utilizando ```@extend```;
  * Operadores aritméticos.


Podem ler mais sobre estas funcionalidades no [guia oficial](http://sass-lang.com/guide). Uma das grandes vantagens em utilizar este pré-processador é o aumento de produtividade.

> Agora, deixo-vos a pergunta: acham que o SCSS pode vir a ser o futuro CSS?
> Poder-se-à tornar mais que um pré-processador?
