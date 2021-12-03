const Sequelize = require('sequelize');
const connect = require('./databases');

//Criando tabela para os Protudos

const Protudos = connect.define('protudos',{
    protudos:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    valor:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    disponivel:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Protudos.sync({force: true});

module.exports = Protudos;