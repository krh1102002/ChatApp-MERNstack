const express= require('express');
const UserModel=require('../models/UserModel')
const expressAsyncHandler=require("express-async-handler")
const { Error } = require('mongoose');
const generateToken = require('../Config/generateToken');
const bcrypt=require("bcrypt");


//login
const loginController=expressAsyncHandler(async(req,res)=>{
    const {name,password}=req.body;

    //comparing name info from db
    const user=await UserModel.findOne({name});
    // console.log(UserModel.findOne({name})) 
    // const reqbodypassword= await (password);
    // const userpassword=await(user.password);
    // console.log("fetched user data",user)

 const matchPassword=await bcrypt.compare(password,user.password);

    // console.log(await user.matchPassword(password));
    if(user &&(matchPassword)){
        const response=({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        });
        console.log(res.json(response))
        res.json(response)
    }else{
        res.status(401);
        throw new Error("Invalid username or password");
    }
});


//registration
const registerController=expressAsyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;

    //whether all the information get filled or not
    if(!name || !email || !password){
        res.send(400)
        throw Error("All necessary input fields have not filled")
    }

    // pre-existing usermodel
    const userExist=await UserModel.findOne({email});
    if(userExist){
        throw new Error("username already Exist")
    }

    // username already taken
    const userNameExist=await UserModel.findOne({name});
    if(userNameExist){
        throw new Error("userName already taken")
    }

    //create an entry in the db for the usermodel
    const user =await UserModel.create({name,email,password})

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error("Registration error")
    }
});

module.exports={loginController,registerController}