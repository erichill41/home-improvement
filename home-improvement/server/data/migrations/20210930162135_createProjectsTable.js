exports.up = function(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('project_id').primary();
    table.string('project_name');
    table.string('project_priority');
    table.specificType('supplies_needed', 'text ARRAY');
    table.string('time_needed');
    table.string('room_in_house');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('projects');
};
