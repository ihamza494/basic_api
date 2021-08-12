const express = require('express')   //importing express
const app = express()  //create an express application
const port = 3000  //define a port

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hamza', (req, res) => {
  const person= {
    name:"Hamza Iqbal",
    semester: "7th",
    Rollnumber: "18K1068",
    Goals: ["CAR","200 BIKE", "Big House", "AAA"]
  };
  res.json(person)  //javascript object notation
})
app.get('/friends', (req, res) => {
  const person= [{
    name:"Salman",
    Designation: "Quranic Teacher"
  },
  {
    name:"Noman",
    Designation: "Quranic Teacher"},
  {
    name:"Atta ur Rehman",
    Designation: "Salesman"
  },
  {
    name:"Mubeen",
    Designation: "Salesman"
  }];
  res.json(person)  //javascript object notation
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

app.listen(port, () => {  //run the app on port
  console.log(`Example app listening at http://localhost:${port}`)
})