const Joi = require('joi');
const { playerSchema } = require('../validators/players');
const Errors = require('../errors');

const PlayerModel = require('../models/PlayerModel');

class PlayerHandler {
  static async add(req, res) {
    // Obtenemos conexión desde request.
    const { conn } = req.database; 
      // TODO:
      // Obtener objeto del body
      // Validar objeto
      // -----> OK:Insertarlo en la base de datos
      // -----> NOK: Indicar que no pasa la validación y devolver estado
    const result = await PlayerModel.add(conn, 'asdf');
    console.log('Result ', result);
    return res.status(200).send({ data: 'Si ves este mensaje, es porque le dimos a la DB T.T' });
  }

  static async delete(req, res) {
    const { conn } = req.database;
    const { id } = req.body;
    const result = await PlayerModel.delete(conn, id);
    return result > 0 ? res.status(200).send({ data: "OK" }) : res.status(203).send({ data: "NOK" });
  }
}

module.exports = PlayerHandler;