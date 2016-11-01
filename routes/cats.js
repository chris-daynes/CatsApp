var express = require('express');
var router = express.Router();
var cats = require('../db/cats.js')

/* GET home page. */
router.get('/', function(req, res) {
  cats.getCats()
    .then(function(catsFromDB) {
      res.render('cats', { cats: catsFromDB });
    })
    .catch(function(error) {
      console.log(error)
    })
});

router.get('/new', function(req, res) {
      res.render('catsNew');
});

router.post('/new', function(req, res) {
  var newCat = {
    name: req.body.name,
    lives: req.body.lives,
    liveStory: req.body.liveStory
  }
  cats.addCat(newCat)
    .then(function (newCat) {
      console.log(newCat);
    })
    .catch(function (error) {
      console.log(error);
    })
  res.redirect('/')
})


module.exports = router;
