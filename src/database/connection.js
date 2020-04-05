const knex = require('knex');
const configuration = require('../../knexfile');
const conf = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(conf);

module.exports = connection;