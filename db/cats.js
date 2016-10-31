var Knex = require('knex')
var knexConfig = require('../knexfile')[procress.env.NOde_ENV || 'development']
var knex = Knex(knexConfig)
