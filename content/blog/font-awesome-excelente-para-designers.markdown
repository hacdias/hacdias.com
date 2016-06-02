---
type: post
author:         "Henrique Dias"
title:          "Font Awesome - Excelente para designers."
date: 2014-10-25 10:56:42+00:00
description:    "A Font Awesome é uma das melhores ferramentas para web designers porque permite a utilização simples de uma vasta gama de ícones. Venha conhecer mais."
categories:
- General
tags:
- CSS
- Ferramentas
- Font Awesome
---

Nós, aqui, temos uma categoria unicamente dedicada a ferramentas para desenvolvedores e, hoje, trazemos mais um item para ser colocado nessa categoria.

Apesar de não ser uma ferramenta de definição, colocarei este artigo nessa categoria porque a **Font Awesome** é algo que pode ser deveras útil para os programadores e _web designers_.

![Font Awesome - Excelente para designers.](/images/fontawesome.jpg)

**Font Awesome** é um projeto _open source_ que nos permite, de forma muito simples, incorporar ícones em páginas _web_.

Como assim? Através de um simples ficheiro CSS temos à nossa disposição uma gigante quantidade de ícones padrão como o símbolo de eliminar, câmara, de redes sociais, etc.


## Como "instalar"


Existem diversas formas de utilizar a _Font Awesome_. A primeira e mais fácil forma é, simplesmente, chamar o ficheiro CSS da fonte no cabeçalho de um ficheiro HTML.

```html
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
```

Pode também descarregar os ficheiros da _Font Awesome_ [aqui](http://fortawesome.github.io/Font-Awesome/) e chamar o ficheiro CSS principal, o font-awesome.min.css font-awesome.min.css  através do HTML.

Existem outras formas mais complicadas que podem ser úteis em diversas situações. Pode ver [aqui](http://fortawesome.github.io/Font-Awesome/get-started/) mais formas de instalar a _Font Awesome_.


## Como utilizar


A utilização da Font Awesomeé deveras simples. Para inserir ícones utilizamos a seguinte sintaxe:

```html
<i class="fa fa-nome fa-tamanho"></i>
```

No código HTML acima devemos substituir nome  pelo respetivo nome do ícone que pode encontrar [aqui](http://fortawesome.github.io/Font-Awesome/icons/) e, tamanho  por um dos seguintes:

![fontawesomesize](/images/fontawesomesize.jpg)

Existem ainda muitos outros atributos que pode adicionar ao código de forma a personalizar o ícone. Veja a tabela seguinte:

| **Código**      | **Para que serve**                                                              |
|-------------|-----------------------------------------------------------------------------|
| ```fa-spin```     | Faz com que o ícone rode continuamente no sentido dos ponteiros do relógio. |
| ```fa-border```   | Adiciona uma borda ao ícone.                                                |
| ```fa-rotate-x``` | Gira o ícone 90, 180 ou 270 graus (colocar os graus em vez de "x").         |
| ```fa-flip-x```   | Transforma o ícone no seu simétrico vertical ou horizontalmente.            |
| Etc         | Pode ver mais [aqui](http://fortawesome.github.io/Font-Awesome/examples/).  |


Como pode ver, este pequeno CSS pode ser extremamente útil quando o site/aplicação que está a desenvolver necessita de muitos ícones. Se quiser ler mais sobre a Font Awesome, pode aceder ao seu site oficial [aqui](http://fontawesome.io/).
