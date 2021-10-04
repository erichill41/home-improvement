const knex = require('../data/connection');

function list() {
  return knex('projects')
    .select('*')
    .orderBy('project_id')
}

function create(newProject) {
  return knex('projects')
    .insert({...newProject}).returning('*')
}

function destroyProject(project_id) {
  return knex('projects')
    .where({ project_id: project_id })
    .del()
}

module.exports = {
  list,
  create,
  destroyProject,
}