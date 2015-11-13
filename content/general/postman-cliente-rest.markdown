---
type: post
author:         "Henrique Dias"
title:          "POSTMAN - Um cliente REST"
date:           2014-07-25 13:19:02+00:00
image:     "images/postman.jpg"
color: "rgb(220, 131, 101)"
description:    "Para todos os desenvolvedores web, o POSTMAN vai ser uma grande ajuda no desenvolvimento web, principalmente quando o assunto se refere a solicitações HTTP."
categories:
- General
tags:
- Extensões
- Ferramentas
- Google Chrome
- Web
---

Os desenvolvedores contam com diversas ferramentas que visam ajudar no desenvolvimento. Por vezes, existem excelentes ferramentas que passam despercebidas para muitos.

Para todos os desenvolvedores web, o **POSTMAN** vai ser uma grande ajuda no desenvolvimento web, principalmente quando o assunto se refere a solicitações HTTP (*HTTP requests*).

O **POSTMAN** é um cliente [REST](http://pt.wikipedia.org/wiki/REST) - pequena grande ferramenta -  criada pela programador [Abhinav Asthana](http://www.rickreation.com/) e está disponível na forma de extensão para o Google Chrome. Pode fazer o download da extensão [aqui](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).

Considero esta extensão excelente pois permite-nos "injetar" e receber dados muito facilmente através de métodos HTTP ou de outras opções.

Com esta extensão torna-se mais fácil encontrar um problema numa aplicação ou *website* que estejamos a desenvolver. Abaixo encontram um exemplo que pelo qual comecei a utilizar esta extensão.

>Recentemente estava a enviar pedidos POST para o servidor utilizando [jQuery e  Ajax](http://blog.henriquedias.com/post-get-ajax-resposta-php/) sendo que a resposta desses pedidos devia ser em JSON mas estava sempre a receber o erro ```unexpected character``` do lado do cliente.
>
> Na altura sabia que o JS estava a receber uma página HTML em vez de dados em JSON o que queria dizer que havia um erro no lado do servidor, nos ficheiros PHP.
>
> O erro é-nos normalmente dado pelo PHP  quando visualizamos a página, mas como não sabia o que estava a receber, não o podia ver e não tinha mais nenhuma opção sem ser ir "à busca do erro" até que o  POSTMAN surgiu.
>
Instalei a aplicação,  coloquei os dados do pedido POST, o URL e recebi tudo o que o servidor enviou. Aí consegui detetar o erro do PHP facilmente e corrigi-lo.


Esta extensão também é boa quando queremos testar se existem problemas de segurança no site. Será que conseguimos alterar as opções do utilizador numa *web app* fazendo apenas um pedido mesmo sem a sessão iniciada? Devemos ter cuidado com tudo isso.

Deixo-vos aqui também o vídeo da demo criado pelo próprio autor da extensão:

{{< youtube m4in-ea201U >}}

Na demo acima puderam ver mais funções que esta extensão vos pode fornecer e acredito que esta vos seja útil =D
