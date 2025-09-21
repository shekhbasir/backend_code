//here i am going to connecting the  mongodb database 

const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;

const url = "mongodb+srv://Basir:Basir@cluster0.tdy5uue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//now here creating the connectingcallback function
let hamdb;
const hamarfun=(callback)=>{
  MongoClient.connect(url).then((result)=>{
    hamdb=result.db("todo");
    callback();
  }).catch(err =>{
    console.log("this is the error from the connection of mongo");
  })
}

const getgb=()=>{
  if(!hamdb){
    throw new Error("this is the frror not found an element ");
  }
  return hamdb;
}

exports.getgb=getgb;
exports.hamarfun=hamarfun;