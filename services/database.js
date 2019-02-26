require('dotenv').config();
const { Client } = require('pg');

const { DATABASE_URL } = process.env;

class DatabaseService {
  constructor() {
    this.conn = new Client({ connectionString: DATABASE_URL });
    this.conn.connect();
  }

  async testConnection() {
    try {
      const q = await this.conn.query('SELECT NOW()');
      const results = await q.rows;
      return results;
    } catch (e) {
      return { mgs: 'some error', meta: e };
    }
  }
}

module.exports = DatabaseService;
