const { Sequelize } = require('sequelize');
const {connection} = require('./DataBaseConnection')


const Exames = connection.define('Exames', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Exame: {
        type: Sequelize.STRING
    },
});

const Users = connection.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


async function gerarModelUsers() {
    await Users.sync();
}
async function gerarModelExames() {
    await Exames.sync();
}

connection.sync()
 
gerarModelUsers();
gerarModelExames();

module.exports = {Users, Exames};