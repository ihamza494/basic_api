const express = require('express')   //importing express
const app = express()  //create an express application
const cors = require('cors');
const port = 5000  //define a port
var router = express.Router() ; //we creating a nested router
const { notesRouter } = require("./api/v1/index")
require("./db/index");

app.use(express.json());
app.use(cors());
// root (/)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/cousins', (req, res) => {
  const person= [{
    name:"Saad",
    Designation: "own shop"
  },
  {
    name:"Arsalan",
    Designation: "Admin"},
  {
    name:"Osama",
    Designation: "DIT"
  },
  ];
  res.json(person)  //javascript object notation
})
app.use("/notes", notesRouter)
app.listen(port, () => {  //run the app on port
  console.log(`Example app listening at http://localhost:${port}`)
})