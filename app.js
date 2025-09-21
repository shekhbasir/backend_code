const express=require('express');
const app=express();
const home=require('./routes/home');
const path=require('path');
const alldata=require('./routes/alldata');
const { hamarfun } = require('./database/home');
const dash=require('./routes/dash');
const del=require('./routes/del');
const upda=require('./routes/upda');
const comp=require('./routes/comp');
const imp=require('./routes/imp');

const port=6678;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(home);
app.use(alldata);
app.use(dash);
app.use(del);
app.use(upda);
app.use(comp);
app.use(imp);

hamarfun(()=>{
app.listen(port,()=>{
  console.log(`this is the  running http://localhost:${port}`);
})
})
