const knex = require('../data/connection');

function list() {
  return knex('bills')
    .select('*')
    .orderBy('bill_id')
}

function create(newBill) {
  return knex('bills')
    .insert({...newBill}).returning('*')
}

function destroyBill(bill_id) {
  return knex('bills')
    .where({ bill_id: bill_id })
    .del()
}

module.exports = {
  list,
  create,
  destroyBill,
}