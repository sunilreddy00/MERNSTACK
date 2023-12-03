//  MIDDLEWARES AND ROUTES
 const express = require("express")

 const app = express()

 const port = 5000

 const firstHandler = ((req,res,next)=>{
  if(10 < 20){
    next()
  }
 })
 const secondHandler = ((req,res,next)=>{
  if(10 > 20){
    next() 
  }
  else{
    console.log("sorry you are not allowed")
  }
 })
 const thirdHandler = ((req,res,next)=>{
  if(30 < 40){
    next()
  }
 })

//  app.get('/apple',(req,res) =>{
//   res.send("Apple is red in color")
//  })
    
//  app.listen(port,() => {
//   console.log("Server start and running succesfully!")
//  })

app.get('/home',firstHandler, (req,res)=>{
  res.send("Hello, I am Home Page")
})
app.get('/about',secondHandler,(req,res)=>{
  res.send("This is about Page")
})
app.get('/user/:121',thirdHandler,(req,res) => {
  res.send("You searched for 121")
})


app.listen(port,() => {
  console.log("Server start and running succesfully!!")
})