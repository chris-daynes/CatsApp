
exports.up = function(knex, Promise) {
  console.log('Cats table has been created');
  return knex.schema.createTableIfNotExists('cats', function (table) {
    table.increments('id')
    table.string('name')
    table.integer('lives')
    table.text('liveStory')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
  console.log('The cats table was dropped');
};
