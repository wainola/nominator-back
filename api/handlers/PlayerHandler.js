const Joi = require('joi');
const { playerSchema } = require('../validators/players');
const Errors = require('../errors');

const PlayerModel = require('../models/PlayerModel');

class PlayerHandler {
  static async add(req, res) {    
      // TODO:
      // Obtener objeto del body
      // Validar objeto
      // -----> OK:Insertarlo en la base de datos
      // -----> NOK: Indicar que no pasa la validación y devolver status adecuado
    const resultOfRegistration = await PlayerModel.add(req.database["conn"], 'asdf');
    console.log('player test ', resultOfRegistration);
    return res.status(200).send({ data: 'Si ves este mensaje, es porque le dimos a la DB T.T' });
  }
}

module.exports = PlayerHandler;