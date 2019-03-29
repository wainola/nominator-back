const Base = require('./Base');

class PlayerModel extends Base {
  // Aquí, cuando creemos la tabla, deberíamos hacer insert, upd, delete ? 
  static async add(db, data) {
    await db.query("SELECT NOW() as now", (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log(res.rows[0])
      }
    })
  }
}

module.exports = PlayerModel;