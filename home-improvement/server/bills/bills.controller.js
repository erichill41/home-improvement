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

async function read(req, res) {
  let { bill_id } = req.params;
  let bill = await service.read(bill_id);
  console.log(bill_id, bill);
  res.json({ data: bill[0] })
}

async function update(req, res) {
  let bill = req.body.data;
  console.log('UPDATE BILL', bill);
  const newBill = await service.updateBill(bill);
  console.log('NEW BILL', newBill)
  res.status(200).json({ data: newBill });

}

module.exports = {
  list,
  create,
  destroy,
  read,
  update,
}