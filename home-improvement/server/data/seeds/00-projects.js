const projectSeeds = require('../projects-data');

exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert(projectSeeds);
    });
};
