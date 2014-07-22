var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();

app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');

var articles = [];

//homepage
app.get('/', function (req, res) {
  res.render('site/index');
});

//summary of articles
app.get('/articles', function (req, res) {
  res.render('articles/index', {articles: articles});
});

//form to add new articles
app.get('/articles/new', function (req, res) {
  res.render('articles/new');
});

app.get('/articles/:id', function (req, res) {
  var id = req.params.id;
  var article = articles[index];
  // res.render()
});

app.post('/articles', function (req, res) {
  articles.push(req.body.articles);
  res.redirect('/articles/new')
})


//about page
app.get('/about', function (req, res) {
  res.render('site/about');
});

//contact page
app.get('/contact', function (req, res) {
  res.render('site/contact');
})






app.listen(3000, function() {
  console.log("SERVER STARTED ON local")
});