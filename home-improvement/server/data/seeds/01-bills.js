const billSeeds = require('../bills-data');

exports.seed = function(knex) {
  return knex('bills').del()
    .then(function () {
      return knex('bills').insert(billSeeds);
    });
};
