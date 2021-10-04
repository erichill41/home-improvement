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

function read(bill_id) {
  return knex('bills')
    .where({ bill_id: bill_id })
    .select('*')
}

function updateBill(bill) {
  const {
    bill_id,
    bill_name,
    bill_website,
    bill_date,
    bill_frequency,
    bill_type,
    bill_amount,
  } = bill;

  return knex('bills')
    .where({ bill_id: bill_id })
    .update({
      bill_name: bill_name,
      bill_website: bill_website,
      bill_date: bill_date,
      bill_frequency: bill_frequency,
      bill_type: bill_type,
      bill_amount: bill_amount,
    }, '*')
}

module.exports = {
  list,
  create,
  destroyBill,
  read,
  updateBill,
}