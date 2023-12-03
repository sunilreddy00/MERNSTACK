
const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require("mongoose")
const employeeRoutes = require("./routes/employeeRoutes")
const ejs = require('ejs')

const app = express()

const PORT = process.env.PORT || 5000

app.set('view engine','ejs') 

dotEnv.config()

app.use(express.json());

// client side rendering
app.get('/mango',(req,res)=>{
  res.json({fruit:"mango"})
})  

// server side rendering
app.get('/grapes',(req,res)=>{
  res.render('samplePage')
})

// html css
//Template engines
//EJS

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.use('/employees',employeeRoutes)

app.listen(PORT,()=>{
  console.log(`Server started and running at ${PORT}`)
})
