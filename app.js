var express = require('express'),
  ejs = require('ejs'),
  bodyParser = require('body-parser'),
  app = express();


var articles = [];


app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');



//homepage
app.get('/', function (req, res) {
  res.render('site/index');
});

//summary of articles
app.get('/articles', function (req, res) {
  res.render('articles/articles', {articles: articles});
});

//form to add new articles
app.get('/articles/new', function (req, res) {
  res.render('articles/new');
});

//'show' page shows articles based on index in array
app.get('/articles/:id', function (req, res) {
  var index = req.params.id;
  var article = articles[index];
  res.render('articles/show', {article: article});
});


app.post('/articles', function (req, res) {
  // console.log(req.body.article);
  articles.push(req.body.article);
  // console.log(articles);
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