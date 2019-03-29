const Joi = require('joi');
const { playerSchema } = require('../validators');
const Errors = require('../errors');

const UserModel = require('../models/UserModel');

class UserHandler {
  static async register(request, response) {
    const { body } = request;
    const validation = Joi.validate(body, registrationSchema);

    if (validation.error !== null) {
      return response.status(Errors[422].status).send(Errors[422].message);
    }

    const resultOfRegistration = await UserModel.register(request.database, body);
    console.log('userRegistrarion', resultOfRegistration);
    return response.status(200).send({ data: 'some shit' });
  }
}

module.exports = UserHandler;
