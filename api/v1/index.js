const express = require('express')   //importing express
var notesRouter = express.Router()  //we creating a nested router
const mongoose = require("mongoose");
const Note = require("../../db/model/note.model");


// it will be located on '/notes/hamza'
notesRouter.get('/hamza', (req, res) => {
    const person= {
      name:"Hamza Iqbal",
      semester: "7th",
      Rollnumber: "18K1068",
      Goals: ["CAR","200 BIKE", "Big House", "AAA"]
    };
    res.json(person)  //javascript object notation
  })
  
  // notes ('/notes')
  
  notesRouter.get('/', (request, response) => {
    Note.find({}, (err, notes) => {
      if (err) {
        return console.error(err);
      };

      response.json({
        notes,
      });
    });
  
});
notesRouter.post('/', (request, response) => {
    console.log(request.body);
    const newNote = new Note(request.body);
    newNote.save().then((savedNote) => {
      response.json({
        note: savedNote,
        success: true,
      });
    });
    
  });
  notesRouter.get('/:id', (request, response) => {
    response.json({
      reply : ' notes by id success',
    });
  });
  notesRouter.delete('/:id', (request, response) => {
    response.json({
      reply : ' notes by id delete success',
    });
  });



  //module.exports = notesRouter ;
  module.exports = {
    notesRouter
  }