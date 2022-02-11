const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
// const ejs = require("ejs");

const app = express();
let newToDoS = ["Code Academy", "Udemy", "Semester"];
// let workToDoS = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get("/", function(req, res) {
  let day = date.getDate();
  res.render('list', {listTitle: day, nextToDoS: newToDoS, byAkshay: "<%= To Do List %>"});

});

app.post("/", function(req, res) {
  let newToDo = req.body.newItem;
  // if (req.body.list === "Work") {
  //   workToDoS.push(newToDo);
  //   res.redirect("/work");
  // } else {
  newToDoS.push(newToDo);
  res.redirect("/");
  // }
});

// app.get("/work", function(req, res) {
//   res.render("list", {listTitle: "Work List", nextToDoS: workToDoS, byAkshay: "<%= To Do List %>"})
// });

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
