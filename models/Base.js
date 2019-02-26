<<<<<<< HEAD
<<<<<<< HEAD
=======
require('dotenv').config();
const { Client } = require('pg');

const { DATABASE_URL } = process.env;

const conn = new Client({
  connectionString: DATABASE_URL
});

conn.connect();
>>>>>>> adding database middleware to server
=======
>>>>>>> WIP userhandler
class Base {
  static async query(queryToExec) {
      const q = await conn.query(queryToExec)
      const results = await q.rows;
      if (rows.lengt)
  }
}
