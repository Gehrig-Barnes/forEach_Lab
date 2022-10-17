
//chai is an assertion library that is used along side with Mocha.
//provides functions and methods that help you compare the output of a certain test with it's expected value
const chai = require('chai')
//https://www.chaijs.com/guide/styles/ --> assertion style guide.
global.expect = chai.expect

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
//file system module, aka fs module, allows you to work with the file system on your computer
const fs = require('fs')
const jsdom = require('mocha-jsdom')
//path goes along with fs. path allows use to create a path to the file that we want to retrieve. We have to use path.resolve('some path way')
//I'm not exactly sure why we need to set it up this way, More research needs to be done.
const path = require('path')
const babel = require('babel-core');

//https://ultimatecourses.com/blog/relative-paths-with-node-readfilesync
//https://www.geeksforgeeks.org/node-js-fs-readfilesync-method/
//fs.readFileSync is used to read a file and return it's content. There is a fs.readFile but this reads a file in a asynchronous way.
//for example, if we did fs.readFile(path), it would take time to find the file and read it while also running the code below. 
//So instead, we want to use fs.readFileSync! so the code FIRST retrieves the file before running the below code. 
//above, looking at path.resolve. we can't simply set it up as such --> path.resolve(../index.html)
//instead we have to use __dirname which represents the absolute path of the directory containing the executing file. 
//but here is the thing, we aren't using index.html for this lab. Just thought it would be cool to at least have this for future reference
//basically, we don't even need to use this below code because we don't really care about the html. 
//https://learn.co/lessons/javascript-intro-to-mocha
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

//https://babeljs.io/docs/en/babel-core
//https://www.youtube.com/watch?v=vkIfnokRBSc&ab_channel=erickatz
//docs don't really give me to much, but I'm reaching out on reddit to see what info I can find. 
//But here is what I think. bable is used to translate code into readable javascript. so we use bable. transformSync
//similar to the previous one, sync is used to make sure that this code runs before doing the code below.
//we then use path.resolve('some path name') to target the file that we want to 'transform'
//only a guess, I need to do more research.   
const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    //https://babeljs.io/docs/en/babel-preset-env
    //https://blog.jakoblind.no/babel-preset-env/
    //this second part of the path resolve is the 'options' part. 
    //for this part we are saying, "hey, set the presets to ['env']"
    //what this does is that it gives us all the plugins we need to transpile all ES6 features. 
    //this is an extremely simplified explaination, but good enough for now. 
    presets: ['env']
  }
);
//bableResult.code just means get the code from that result. 
const src = babelResult.code

//https://www.testim.io/blog/jsdom-a-guide-to-how-to-get-started-and-what-you-can-do/#:~:text=JSDOM%20is%20a%20library%20which,it%20will%20parse%20that%20HTML.
//jsdom parses and interacts with code just like a web browser. But it's not web browser, I guess it just mimics one. 
//basically emulates a web browser 
jsdom({
  html, src
});