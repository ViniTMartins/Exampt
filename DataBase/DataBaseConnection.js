const { Sequelize } = require('sequelize');

const connection = new Sequelize(
    {
        dialect: 'sqlite',
        storage: 'banco.sqlite'
    }
);

module.exports = {connection};