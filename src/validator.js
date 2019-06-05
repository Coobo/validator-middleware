const Joi = require('./joi');

const validatorMiddlewareFactory = (requestDataField, JoiSchema) => {
  let middleware = (req, res, next) => {
    const data = req[requestDataField];

    const result = Joi.validate(data, JoiSchema);
    if (result.error) return res.status(400).send(result.error);

    return next();
  };

  return middleware;
};

module.exports = exports = validatorMiddlewareFactory;
