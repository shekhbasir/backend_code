const { ObjectId } = require('mongodb');
const { getgb } = require('../database/home');

const arr=[];
module.exports=class Home{
  constructor(task){
    this.task=task;
  }
  save(){
    const db=getgb();
    return db.collection('todo').insertOne(this);
  }
  static fetchall(){
    const db=getgb();
    return db.collection('todo').find().toArray();
  }
  static deleting(hamarid){
    const db=getgb();
    return db.collection('todo').deleteOne({_id:new ObjectId(String(hamarid))});
  }
}