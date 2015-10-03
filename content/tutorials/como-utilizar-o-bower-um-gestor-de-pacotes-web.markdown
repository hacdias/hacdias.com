---
type: post
author:         "Henrique Dias"
title:          "Como utilizar o Bower, um gestor de pacotes web"
date:           2014-08-18 12:01:12+00:00
description:    "O Bower é um excelente gestor de pacotes web. Utilizando este gestor, torna-se mais fácil e prático adicionar e atualizar as diversas bibliotecas utilizadas"
categories:
- Tutorials
tags:
- Bower
- Ferramentas
- JavaScript
- Node.js
- Pacotes
---

O **Bower** é um excelente gestor de pacotes web. Utilizando este gestor, torna-se mais fácil e prático adicionar e atualizar as diversas bibliotecas que utilizamos nos nossos sites/web-apps.

Hoje vamos instalar o Bower e depois vamos criar um ficheiro para gerir os pacotes de um site de exemplo.

![Como utilizar o Bower, um gestor de pacotes web](/images/bower.jpg)

Utilizar o [Bower](http://bower.io/) é bastante simples. Vamos começar com os requisitos. Para podermos utilizar este gestor de pacotes, temos que ter instalado o [Node.js](http://nodejs.org/)  no nosso computador. Podem descarregar o Node.js no site oficial.

Depois de terem o node.js instalado no vosso computador, vamos instalar o Bower. Para isso, abram a linha de comandos do vosso SO, se for Windows corram como Administrador e escrevam o seguinte:


{{< highlight bash >}}
npm install -g bower
{{< /highlight >}}

Agora, existem várias formas de fazer o dowload dos pacotes que precisamos no nosso projeto. Nós vamos começar por analisar as "menos divertidas" e depois passaremos à que, talvez, possa ser considerada a "melhor"

{{< highlight bash >}}
# Instala através do ficheiro bower.json
bower install
# Instala um pacote específico
bower install package
# Instala uma versão específica de um pacote
bower install package#version
{{< /highlight >}}

Como podem ver, existem essas três formas mencionadas acima. Podemos substituir **package** por diversos itens como:

  * Nome do pacote como angularjs
  * Ficheiro zip ou tar remoto ou local
  * Repositório Git remoto ou local
  * Atalho para repositórios do GitHub


Assim, para instalar o jQuery, basta correr o seguinte comando para que seja criada uma pasta no caminho **bower_components\jquery**.

{{< highlight bash >}}
bower install jquery
{{< /highlight >}}

Agora vamos criar um ficheiro chamado ```bower.json``` para descarregar a versão 1.11.0 do jQuery e a versão mais recente do **angular.js**.

{{< highlight json >}}
{
  "name": "projeto-x",
  "version": "0.0.1",
  "dependencies": {
    "jquery": "1.11.0",
    "angular": "master"
  }
}
{{< /highlight >}}

Agora basta correr o seguinte comando para efetuar o download dos pacotes:

{{< highlight bash >}}
bower install
{{< /highlight >}}

Agora, imaginando que saia uma nova versão do angular.js, bastava correr o seguinte comando para atualizar o angular e manter o jQuery na mesma versão:

{{< highlight bash >}}
bower update
{{< /highlight >}}

Como podem ver, é bastante simples fazer o download de pacotes utilizando o Bower. Para os chamar através do HTML basta fazermos como sempre: utilizar as tags ```<script>``` e utilizar o URL absoluto ou relativo para o local onde estão os ficheiros.
