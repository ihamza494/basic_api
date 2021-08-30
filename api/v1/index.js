const express = require('express')   //importing express
var notesRouter = express.Router()  //we creating a nested router
const mongoose = require("mongoose");
const noteModel = require('../../db/model/note.model');
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
  //get all notes
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
//add notes
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

  //get note by ID 
  notesRouter.get('/:id', (request, response) => {
    const noteId = request.params.id;
    noteModel.findById(noteId, (err, note) => {
        if(err){
          return console.log(err);
        }
        if(!note){
          return response.status(404).json({
            message: "note not found",
          });
        }
        response.json({
          reply : ' notes by id success',
          note,
        });
    })
    
  });

  //delete note
  notesRouter.delete('/:id', (request, response) => {
    const noteId = request.params.id;
    noteModel.findByIdAndRemove(noteId, (err, res) => {
      console.log(err, res);
        if(err){
          return console.log(err);
        }
        if(!res){
          return response.status(404).json({
            messsage : 'note not found for deletion',
          })
        }
        response.json({
          reply : "delete note by id success",
        });
    });
  });
  notesRouter.put('/:id', (request, response) => {
    const noteId = request.params.id;
    const updatedBody = request.body;
    noteModel.findByIdAndUpdate(noteId, updatedBody, {new: true}, (err, updatedNote) => {
        if(err){
          return console.log(err);
        }
        if(!updatedNote){
          return response.status(404).json({
            messsage : 'note not found for updation ',
          })
        }
        response.json({
          reply : "updated note by id success",
          note : updatedNote,
        });
    });
  });



  //module.exports = notesRouter ;
  module.exports = {
    notesRouter
  }