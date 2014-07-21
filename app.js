var express = require('express'),
  ejs = require('ejs'),
  app = express();


app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.send("Homepage");
});

app.get('/articles', function(req, res) {
  res.send("Summary");
});

app.get('/articles/new', function(req, res) {
  res.send("Form for adding a new article.")
});

app.get('/articles/about', function(req, res) {
  res.send("About Page");
});

app.get('/articles/contact', function(req, res) {
  res.send("Contact Page");
})






app.listen(3000, function() {
  console.log("SERVER STARTED ON local")
});