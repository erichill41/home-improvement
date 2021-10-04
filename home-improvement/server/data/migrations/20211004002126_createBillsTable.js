exports.up = function(knex) {
  return knex.schema.createTable('bills', (table) => {
    table.increments('bill_id').primary();
    table.string('bill_name');
    table.string('bill_website');
    table.string('bill_date');
    table.string('bill_frequency');
    table.string('bill_type');
    table.string('bill_amount');
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('bills');
};
