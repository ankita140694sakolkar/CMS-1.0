const {StatusCodes } = require('http-status-codes')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs')


const authController ={
    register: async(req,res) =>{
        try{
          const {name, email, mobile, password } = req.body 
         //encrypt password
          const encPassword = await bcrypt.hash(password,10)
          
          const newUser = User({
            name,
            email,
            mobile,
            password: encPassword
          })
          res.status(StatusCodes.OK).json({ MSG:"USER CONNECTED SUCCESFULLY", data: newUser }) 
        
        }catch(err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
        }
    },
    login: async(req,res) =>{
        try{
            res.json({ msg :"login"})   
        
        }catch(err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
        }
    },
    logout: async(req,res) =>{
        try{
            res.json({ msg :"logout"})   
        
        }catch(err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
        }
    },
    refreshToken: async(req,res) =>{
        try{
            res.json({ msg :"refresh token"})   
        
        }catch(err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
        }
    },
    resetPassword: async(req,res) =>{
        try{
          res.json({ msg :"reset password"})   
        }catch(err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: err.message})
        }
    },
}

module.exports = authController