const express=require('express');
const del=express.Router();
const {getgb}=require('../database/home');
const { ObjectId } = require('mongodb');
const Home = require('../model/home');

del.get('/del/:id',(req,res)=>{
  const hamarid=req.params.id;
  Home.deleting(hamarid).then(()=>{
    res.send("data is deleting");
  }).catch(err =>{
    res.send("there is the error is occurs iin the code ");
  })
})
module.exports=del;