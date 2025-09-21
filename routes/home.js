const express=require('express');
const home=express.Router();
const Home = require('../model/home');

home.get('/',(req,res)=>{
  res.render('home'); 
})
module.exports=home;