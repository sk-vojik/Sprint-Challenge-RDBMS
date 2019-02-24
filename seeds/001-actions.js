
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: "open eyes", notes: "do it", completed: true },
        {project_id: 1, description: "turn off alarm", notes: "use thumb", completed: true },
        {project_id: 2, description: "prep food", notes: "yum", completed: true },
        {project_id: 2, description: "eat food", notes: "yummy yum", completed: true },
        {project_id: 3, description: "get in car", notes: "drive", completed: false },
        {project_id: 4, description: "workout", notes: "lift", completed: false }
      ]);
    });
};
