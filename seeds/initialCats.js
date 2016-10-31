
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cats').insert({id: 1, name: 'Fluffy', lives: '9', liveStory: 'I a, a big fat smelly cat'}),
        knex('cats').insert({id: 2, name: 'Killer', lives: '8', liveStory: 'I want to eat mice all day long'}),
        knex('cats').insert({id: 3, name: 'Horse', lives: '7', liveStory: 'I like lasagne and hate Mondays'})
      ]);
    });
};
