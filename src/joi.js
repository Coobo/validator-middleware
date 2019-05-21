const JoiBase = require('joi');
const documentValidator = require('cpf-cnpj-validator').default;

const Joi = JoiBase.extend(documentValidator);

module.exports = exports = Joi;
