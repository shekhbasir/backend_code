const express=require('express');
const upda=express.Router();
const Home=require('../model/home');
const { ObjectId } = require('mongodb');
const { getgb } = require('../database/home');

upda.get('/upda/:id',(req,res)=>{
  const hamarid=req.params.id;
  const db=getgb();
  db.collection('todo').findOne({_id:new ObjectId(String(hamarid))}).then((arr)=>{
    res.render('upda',{item:arr});
  }).catch(err =>{
    console.log("there is error in the edit function ");
  })
})


upda.post('/upda/:id',(req,res)=>{
  const{task}=req.body;
  const newval={
    task:req.body.task
  }

  const hamarid=req.params.id;
  const db=getgb();
  db.collection('todo').updateOne({ _id:new ObjectId(String(hamarid))}, {$set:newval});
  res.send("data is updated in the mongodb");

})
module.exports=upda;