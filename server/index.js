import express from "express";
import "dotenv/config"
const app = express();



app.listen(process.env.PORT,()=>{
    console.log("Running on Port 3000");
})