const Joi = require('joi');

const registrationSchema = Joi.object().keys({
  user: Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().require()
  })
});

const loginSchema = Joi.object().keys({
  user: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
});

const changePasswordSchema = Joi.object().keys({
  user: Joi.object().keys({
    email: Joi.string().required(),
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required()
  })
});

const getUserSchema = Joi.object().keys({
  user: Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required()
  })
});

module.exports = {
  registrationSchema,
  loginSchema,
  changePasswordSchema,
  getUserSchema
};
