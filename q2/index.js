import express from "express";
import { trainbuddy } from "./routes/trainbuddy.js";
import cookieParser from "cookie-parser";

const app= express();
app.use(cookieParser());
app.use(express.json());
app.get('/' ,(req,res)=>{
  res.send('Api is working');
})
app.use('/trainbuddy', trainbuddy);
app.listen(3001, ()=> console.log("train Buddy Server Started"));