import express from "express";
import "dotenv/config"
import mongoose from "mongoose";

const app = express();

mongoose.connect(process.env.MONGO)
.then(()=>{
    app.listen(3000,()=>{
        console.log("Running on Port 3000")
    })
}).catch((err)=>{
        console.log(err);
});


