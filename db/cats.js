var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getCats,
  addCat
}

function getCats() {
  return knex('cats')
}

function addCat(catObj) {
  return knex('cats').insert(catObj)
}
