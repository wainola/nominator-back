require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const { DATABASE_URL } = process.env;

console.log(process.env.DATABASE_URL);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString: DATABASE_URL
});

pool.connect();

pool.query('SELECT NOW()', async (err, result) => {
  if (err) console.log('Error::', err);
  const rows = await result.rows;
  console.log('ROWS::', rows);
});

app.get('/test', async (request, response) => {
  return response.status(200).send({ msg: "I' alive!" });
});

app.listen(9000, err => {
  if (err) console.log('Some error:::', err);
  console.log('Server listening on port 9000');
});
