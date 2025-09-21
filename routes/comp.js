const express = require('express');
const comp = express.Router();
const { ObjectId } = require('mongodb');
const { getgb } = require('../database/home');

comp.get('/comp/:id', (req, res) => {
  const hamarid = req.params.id;
  const db = getgb();

  db.collection('todo')
    .updateOne(
      { _id: new ObjectId(hamarid) },
      { $set: { status: "completed" } } 
    )
    .then(() => {
      res.redirect('/dash'); 
    })
    .catch(err => console.log("Error updating task", err));
});

module.exports = comp;
