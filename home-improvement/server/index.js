const express = require("express");
const cors = require('cors');
const projectsRouter = require('./projects/projects.router');
const billsRouter = require('./bills/bills.router');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/projects', projectsRouter);
app.use('/bills', billsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});