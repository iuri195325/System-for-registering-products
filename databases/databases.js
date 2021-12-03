const Sequelize = require('sequelize');

//Connect com o Banco

const connect = new Sequelize('cadastro','root','2254aabb',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connect;