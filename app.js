const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
let newToDoS = ["Code Academy", "Udemy", "Semester"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get("/", function(req, res) {
  let day = date.getDate();
  res.render('list', {listTitle: day, nextToDoS: newToDoS, byAkshay: "<%= To Do List %>"});

});

app.post("/", function(req, res) {
  let newToDo = req.body.newItem;
  newToDoS.push(newToDo);
  res.redirect("/");
});

app.listen(4000, function() {
  console.log("server is running on port 4000");
});
