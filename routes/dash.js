const express=require('express');
const dash=express.Router();
const Home=require('../model/home');

dash.get('/dash',(req,res)=>{
  
  Home.fetchall().then((arr)=>{
    if(arr){
      res.render('dash',{arr});
    }else{
      res.send("there is not data available");
    }
  }).catch(err =>{
    console.log("there is the error from the code ");
  })
})
module.exports=dash;