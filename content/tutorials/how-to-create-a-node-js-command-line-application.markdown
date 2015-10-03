---
type: post
author:         "Henrique Dias"
title:          "How to create a Node.js command-line application"
date: 2015-03-31 18:55:49+00:00
description:    "Node.js is one of the trends in the programming world. Let's learn how to create node.js command-line applications."
image:     "images/nodejscli.jpg"
categories:
- Tutorials
tags:
- JavaScript
- Node.js
- Tutorial
---

Nowadays, **[node.js](https://nodejs.org/)** is one of the technologies which is always talked about when the subject is related with real-time applications or even [CLI ](http://en.wikipedia.org/wiki/Command-line_interface)(Command-line interface) apps.

Node.js is a cross-platform platform (which is very redundant) built on Chrome's JavaScript runtime. They say that with Node.js we can create network applications, but we can do a lot more.

[Bower](/tutorials/como-utilizar-o-bower-um-gestor-de-pacotes-web/), for example, is a very useful tool built in the top of node.js. We can take advantage of the fact of node.js be cross-platform to create CLI apps which can serve  everyone.

CLI application can be very useful to task automation, to do repetitive tasks we do everyday, etc. Bower, that I've already mentioned, is useful because it installs and updates all of the front-end dependencies automatically.

So, the purpose of this article is helping you creating a command-line interface application with node.js.

## Is everything ok?

To begin, you should have both node.js and npm installed on your computer. The current versions of node.js already have npm build-in. Npm is the official node package manager.

You can download node.js from this website. After installed, you should check if the node.js and npm are correctly installed on your computer. To do that, you can, for example, run the following commands to see the current installed version of each thing:

{{< highlight bash >}}
> node --version
> npm --version
{{< /highlight >}}

If both commands return something like v0.12.0 and 2.5.1, everything is ready to be used.


## Initialize the package


Now, let's create our first node.js command-line application with node.js. First of all, go the directory where you want to save the code of the application. Run the following commands:

{{< highlight bash >}}
> mkdir mycliapp
> cd mycliapp
{{< /highlight >}}


Of course you can replace mycliapp  with whatever you want. Now, we have to create a ```package.json``` file which contains the [meta information](http://en.wikipedia.org/wiki/Metadata) of the application. It can be done automatically:

{{< highlight bash >}}
> npm init
{{< /highlight >}}

After running the previous command, you should put the information you want for the package. If the information between parentheses is correct, you just have to press enter.

Now, you should have something like this:

{{< highlight json >}}
{
  "name": "mycliapp",
  "version": "0.0.1",
  "description": "This is my first cli application.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Henrique Dias <hacdias@gmail.com> (http://henriquedias.com)",
  "license": "MIT"
}
{{< /highlight >}}


I think almost all of the content of that file is self-explanatory. If you have some doubt, search in [this page](https://docs.npmjs.com/files/package.json). Right now, we are going to ignore the ```index.js``` file.

Now, and because it is a command-line application, we should add two other informations to the ```package.json``` file:

{{< highlight json  >}}
"preferGlobal": true,
"bin": {
  "mycliapp": "./bin/mycliapp"
}
{{< /highlight >}}

The first one (preferGlobal ) that advises the user that this app should be installed globally, it means, available in the all system.

The second one, bin , is used to tell the commands which will be available to use. In this example we have the command ```mycliapp``` associated with the file located at ```bin/mycliapp.js```.

## Output some data

Then we are going to create the ```bin/mycliapp.js``` file which will have all of the application logic (in this case, it can be divided into various files). Create it, and simply add the following line of code to print an Hello World:

{{< highlight javascript >}}
console.log('Hello, World!');
{{< /highlight >}}

Now, link your app with npm to run it locally. Do it using this command:

{{< highlight bash >}}
> npm link
{{< /highlight >}}

After that, you should be able to run the command ```mycliapp``` in the console. Run it and you should receive the message "Hello, world!".

## Get data from user

Now we already know how to output some information (simply using ```console.log()```). So now we are going to learn how to get data from the user.

There are some packages which help us to make question to the user, but we will use the built-in module readline which is very simple to use.

Firstly, we need to include that module. To do that, we may do something like this:

{{< highlight javascript >}}
var rl = require('readline');
{{< /highlight >}}

Now, we have to create the interface to make the question, it means that we are going to set the input and output of data.

{{< highlight javascript >}}
var read = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});
{{< /highlight >}}

```process``` (read more [here](https://nodejs.org/api/process.html#process_process)) is a global object variable which is an instance of [```EventEmitter```](https://nodejs.org/api/process.html#process_process).

So now that we already have the input and output setted up, we can make a question to the user and then receive the answer. We should use this syntax:

{{< highlight javascript >}}
read.question(query, callback);
{{< /highlight >}}

To ask the user his name and then print it, you may do something like this:

{{< highlight javascript >}}
read.question("What is your name? ", function (answer) {
  read.close(); // close the instance of reading interface
  console.log(answer);
});
{{< /highlight >}}

It is very simples as you can see. Never forget to close the instance of the reading interface. After that you can do whatever you want with the answer of the user.

You can get more information about this module [here](https://nodejs.org/api/readline.html).


## How to read arguments


There are a lot of ways to read arguments. There's some third-party packages which helps the user doing it, like [```commander```](https://www.npmjs.com/package/commander), but we are going to do it manually to see how does it work.

Remember the process  object? It also contains the arguments. Let's experiment. Write the following code of line in bin/mycliapp. You might remove all of the previous code or comment it.

{{< highlight javascript >}}
console.log(process.argv);
{{< /highlight >}}

Now, run the application, putting some arguments, options, commands after the app name.

{{< highlight bash >}}
> mycliapp option1 henrique
[ 'node',
 'C:\\Users\\Henrique\\AppData\\Roaming\\npm\\node_modules\\mycliapp\\bin\\mycliapp',
  'option1',
  'henrique' ]
{{< /highlight >}}


So, the first element of our arguments array is the environment, in this case, node. The second one is the path of the file which is running. The following elements are the other arguments.

If you just want the arguments put by the user you may do something like this:

{{< highlight javascript >}}
var args = process.argv;
args.splice(0,2); // remove 2 elements after the position 0
{{< /highlight >}}

If you print the content of args  variable you will see that it only contains the arguments that the user wrote.

Now, if you want, for example, to print "Hello" when the user uses the argument ```sayhello``` , you can do this:

{{< highlight javascript >}}
if (args[0] === 'sayhello') {
  console.log("Hello");
}
{{< /highlight >}}


Simple, but effective.



* * *



Now, go on and create your CLI application with Node.js :)

I hope you have enjoyed this tutorial of how to create node.js command-line applications. If you have some doubts, you may use the comments or the [contact page](/contact/).
