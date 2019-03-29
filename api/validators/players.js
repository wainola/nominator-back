const Joi = require('joi');

const playerSchema = Joi.object().keys({
  player: Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    age: Joi.number().required(),
    skills: Joi.object().keys({
        attack: Joi.number().required(),
        defense: Joi.number().required(),
        speed: Joi.number().required(),
        wellnes: Joi.number().required(),
        isGoalKeeper: Joi.bool().required()
    }),
    positions: Joi.array().required()
  })
});

module.exports = playerSchema;




