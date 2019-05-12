const Joi = require("joi");

module.exports = {
  body: {
    title: Joi.string().required(), //validates if is String and Required
    description: Joi.string().required(),
    price: Joi.number().required()
  }
};
