import User from "../Models/userModel.js";
import bcryptjs from "bcryptjs";

export const signup = async(req,res,next)=>{
    const {username,email,password}= req.body;
    const hashed = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password: hashed});
    try{
        await newUser.save();
        res.status(201).json({msg:"user created succuessfully"});
    }catch(err){
        next(err);
    }

} 