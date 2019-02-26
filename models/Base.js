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
  static async queryToExec(db, query) {
    const q = await db.query(query);
    const r = await q.rows;
    return r;
  }
}

module.exports = Base;
