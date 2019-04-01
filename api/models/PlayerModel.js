const Base = require('./Base');

class PlayerModel extends Base {
  static async add(db, data) {
    const { player } = data;
    await db.query(`INSERT INTO players VALUES ()`, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log(res.rows[0])
      }
    })
  }

  static async delete(db, data){
    const { id } = data;
    await db.query(`DELETE FROM players WHERE id = ${id};`, (err, res) => {
      if (err)
        return 0
      else
        return 1;
    });
  }
}

module.exports = PlayerModel;