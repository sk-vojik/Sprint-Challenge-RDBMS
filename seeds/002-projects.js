
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'wake up', description: 'open those eyes', completed: true },
        {name: 'eat breakfast', description: 'scarf down that food', completed: true },
        {name: 'work out', description: 'lift those weights', completed: false }
      ]);
    });
};
