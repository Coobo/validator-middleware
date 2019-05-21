const JoiBase = require('@hapi/joi');
const documentValidator = require('cpf-cnpj-validator');

const Joi = JoiBase.extend(documentValidator);

module.exports = exports = Joi;
