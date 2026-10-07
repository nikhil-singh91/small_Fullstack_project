const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');

const products=require('./data');
// const { data } = require('motion/react-client');

app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{

    res.send("Welcome to the api");

    
})

app.get("/api/data",(req,res)=>{
    res.send(products);
})

app.get("/api/products",(req,res)=>{
    res.send(products);
})

app.get("",()=>{


})


app.listen(3000,()=>{

    console.log("server is running at 3000");
    
})

