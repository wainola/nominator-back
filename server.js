require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const { Pool } = require('pg');
const DatabaseServices = require('./services/database');

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adding database middleware to server
// JUST FOR TESTING THE DATABASE SERVICES
// new DatabaseServices()
//   .testConnection()
//   .then(d => console.log(d))
//   .catch(e => console.log(e));
<<<<<<< HEAD
=======
const router = require('./routes/index');

const { DATABASE_URL } = process.env;
>>>>>>> user test, handler, model and test
=======
>>>>>>> adding database middleware to server
=======
const Database = require('./services/database');
>>>>>>> using singleton to connect to the database

const router = require('./routes/index');

const app = express();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adding database middleware to server
=======
// JUST FOR TESTING THE DATABASE SERVICES
Database.connect()
  .then(() => console.log('Connected!'))
  .catch(e => console.log(e));

Database.testConnection()
  .then(d => console.log(d))
  .catch(e => console.log(e));

>>>>>>> using singleton to connect to the database
// SETTING UP DATABASESERVICES AS A MIDDLEWARE
app.use((request, response, next) => {
  const req = request;
  req.database = Database;
  return next();
<<<<<<< HEAD
=======
=======
});

>>>>>>> adding database middleware to server
app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
const pool = new Pool({
  connectionString: DATABASE_URL
>>>>>>> user test, handler, model and test
});

app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

=======
>>>>>>> adding database middleware to server
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
