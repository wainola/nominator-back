class Base {
  static async queryToExec(db, query) {
    const q = await db.query(query);
    const r = await q.rows;
    return r;
  }
}

module.exports = Base;
