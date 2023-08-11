const express = require('express');
const { loginController, registerController } = require('../Controllers/userController');

const router=express.Router()
router.post("/login",loginController);
router.post("/register",registerController);

module.exports=router;