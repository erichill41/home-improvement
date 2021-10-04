const service = require('./bills.service');

async function list(req, res) {
  let bills = await service.list();
  res.json({ data: bills });
}

async function create(req, res) {
  const bill = req.body.data;
  const createdBill = await service.create(bill);
  res.status(201).json({ createdBill });
}

async function destroy(req, res) {
  const {bill_id} = req.body.data;
  await service.destroyBill(bill_id);
  res.sendStatus(204);
}

module.exports = {
  list,
  create,
  destroy,
}