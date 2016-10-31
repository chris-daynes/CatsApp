var express = require('express');
var router = express.Router();
var cats = require('../db/cats.js')

/* GET home page. */
router.get('/cats', function(req, res, next) {
  cats.getCats().then(listCats)
  res.render('index', { title: 'Express' });
});

module.exports = router;


function listCats(catsArray) {
  catsArray.forEach(function (cat) {
    console.log(cat)
  })
}
