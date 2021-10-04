const service = require('./projects.service');
// const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res) {
  let projects = await service.list();
  res.json({ data: projects })
}

async function create(req, res) {
  const project = req.body.data;
  const createdProject = await service.create(project);
  res.status(201).json({ createdProject });
}

async function destroy(req, res) {
  const {project_id} = req.body.data;
  await service.destroyProject(project_id);
  res.sendStatus(204);
}

module.exports = {
  list,
  create,
  destroy,
}