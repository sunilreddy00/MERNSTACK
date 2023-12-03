
// FILE SYSTEM(FS) 

// const fs = require('fs')

// fs.readFile("demo.txt",'utf-8',(err,data)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(data)
//   }
// })

// fs.writeFile('example.html','utf8',(err)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log('File crated successfully')
// })

// const contentSample = "My name is sunil, I am creating dynamic content."
// fs.writeFile('example.html', contentSample,(err)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("File content is success")
//   }
// })


// fs.rename('example.html',"newChangedFile.js",(err)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("Modified succesfully")
//   }
// })

// fs.unlink('newChangedFile.js',(err)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log('File deleted succesfully')
//   }
// })

// HYPER TEXT TRANSFER PROTOCOL

// const http = require('http');

// const myServer = http.createServer((request,response) => {
//   response.write("Welcome to my home")
//   response.end()
// });
// myServer.listen(5500);


// IMPORT MODULES FROM LOCALM.JS FILE

const http = require('http')

const { addNumber, subtractNumber, divideNumber, multiplyNumber } = require('./localm')

console.log(addNumber(10,11))
console.log(subtractNumber(10,5))
console.log(divideNumber(10,2))
console.log(multiplyNumber)