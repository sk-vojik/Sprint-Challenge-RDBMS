
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();

    tbl.string('name', 256).notNullable();
    tbl.string('description', 256).notNullable();
    tbl.boolean('completed').defaultTo(false);
    tbl.unique('name', 'uq_projects_name');
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
