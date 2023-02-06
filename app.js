// import express from "express";
// import mongoose from "mongoose";
const express= require("express")
const mongoose= require("mongoose")
// import router from "./routes/user-routes.js";
// import blogRouter from "./routes/blog-routes";
const router = require("./routes/user-routes")
const blogRouter = require("./routes/blog-routes")

const app=express();
app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",blogRouter)



mongoose.connect('mongodb+srv://navinkrv:gafUL6lEoyP4mblM@cluster0.j4ihttk.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    app.listen(process.env.PORT || 5000); 
}).then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})
// OKEsyJ1ZR0rrgmJ8 mongo pass| navinkrv



// --experimental-modules --es-module-specifier-resolution=node
