import express from "express";
import "dotenv/config"
import mongoose from "mongoose";
import userRouter from "./Routes/userRoute.js"
import authRouter from "./Routes/authRouter.js"
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO)
.then(()=>{
    app.listen(3000,()=>{
        console.log("Connected to mongoose and Running on Port 3000")
    })
}).catch((err)=>{
        console.log(err);
});


app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);