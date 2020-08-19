const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(cors());
app.use(morgan("dev")); 
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("Root")
})

app.listen(4000,()=>{
    console.log("Server run port 4000")
})

