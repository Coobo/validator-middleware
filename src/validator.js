const Joi = require('./joi');

const validatorMiddlewareFactory = (requestDataField, JoiSchema) => {
  let middleware = (req, res, next) => {
    const data = req[requestDataField];

    const result = Joi.validate(data, schema);
    if (result.error) res.status(400).send(result.error);

    return next();
  };

  return middleware;
};
