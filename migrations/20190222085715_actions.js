
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();

    tbl.string('notes', 256).notNullable();
    tbl.string('description', 256).notNullable();
    tbl.boolean('completed').defaultTo(false);
    tbl.integer('project_id').unsigned().notNullable().references("id").inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
