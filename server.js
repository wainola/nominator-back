require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const DatabaseServices = require('./services/database');

<<<<<<< HEAD
// JUST FOR TESTING THE DATABASE SERVICES
// new DatabaseServices()
//   .testConnection()
//   .then(d => console.log(d))
//   .catch(e => console.log(e));
=======
const router = require('./routes/index');

const { DATABASE_URL } = process.env;
>>>>>>> user test, handler, model and test

const router = require('./routes/index');

const app = express();

<<<<<<< HEAD
// SETTING UP DATABASESERVICES AS A MIDDLEWARE
app.use((request, response, next) => {
  const req = request;
  req.database = new DatabaseServices();
  return next();
=======
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString: DATABASE_URL
>>>>>>> user test, handler, model and test
});

app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', async (request, response) => {
  return response.status(200).send({ msg: "I' alive!" });
});

app.get('/testDB', async (request, response) => {
  try {
    const d = request.database;
    const q = await d.testConnection();
    return response.status(200).send({ data: { ...q[0] } });
  } catch (e) {
    return response.status(500).send({ error: e });
  }
});

app.listen(9000, err => {
  if (err) console.log('Some error:::', err);
  console.log('Server listening on port 9000');
});
