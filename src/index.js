const Joi = require('./joi');
const validatorMiddlewareFactory = require('./validator');

const validator = exports;

validator.Joi = Joi;
validator.version = require('./../package.json').version;
validator.validatorMiddleware = validatorMiddlewareFactory;
validator.validate = validator.validatorMiddleware;
