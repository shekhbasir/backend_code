//now here i am going to   puting all the importaint task in another collection

const express=require('express');
const imp=express.Router();
const Home=require('../model/home');
const {getgb}=require('../database/home');
const { ObjectId } = require('mongodb');

imp.get('/imp/:id',(req,res)=>{
  const hamarid=req.params.id;
  const db=getgb();
  const newcollection=db.collection('newcollection');

  //now my task is to find the match value
  db.collection('todo').findOne({_id:new ObjectId(String(hamarid))}).then((arr)=>{
    res.send("DATA ADDED IN IMPORTAINT YOU TASK ")
    db.collection('newcollection').insertOne(arr);
  }).catch(err =>{
    console.log("this is the error from the code ");
  })


})
module.exports=imp;