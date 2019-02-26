require('dotenv').config();
const { Client } = require('pg');
const migrations = require('./migrations');

const { DATABASE_URL } = process.env;

const conn = new Client({
  connectionString: DATABASE_URL
});

conn
  .connect()
  .then(() => console.log('success on connection!'))
  .catch(e => console.log('some error happened', e));

migrations.map(async item => {
  try {
    const q = await conn.query(item);
    const r = await q;
    console.log(r);
  } catch (e) {
    console.log('Some error in insertion', e);
    process.exit();
  }
});
