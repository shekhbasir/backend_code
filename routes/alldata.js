const express=require('express');
const Home = require('../model/home');
const alldata=express.Router();



alldata.get('/alldata',(req,res)=>{
  Home.fetchall().then((arr)=>{
    
  }).catch(err =>{
    console.log("thisis the error from the code ",err);
  })
})


alldata.post('/alldata',(req,res)=>{
  const{task}=req.body;
  const creatingobj=new Home(task);
  creatingobj.save().then(()=>{
     res.redirect('/dash'); 
    // res.send("DATA SAVED SUCCESFULLY");
  }).catch(err =>{
    res.send("DATA IS NOT SAVED");
  })
})
module.exports=alldata;