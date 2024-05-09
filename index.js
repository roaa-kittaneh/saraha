import express  from "express";
import initAPP from "./src/modules/app.router.js";
import * as dotenv from 'dotenv';
dotenv.config();
//import 'dotenv/config'
const app=express();
const PORT=process.env.PORT ||3000;

initAPP(app,express);
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
})