const { Sequelize, DataTypes } = require('sequelize');
const db = require('./db');

const Atividade = require('./atividadeModel');

// ORM
const Aluno = db.define('aluno', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula: {
        type: DataTypes.STRING,
        unique: true
    },
    data_nascimento: {
        type: DataTypes.DATEONLY
    },
    pontuacao: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'Aluno'
});

Aluno.hasMany(Atividade, { as: 'atividades', foreignKey: 'aluno_id' });
Atividade.belongsTo(Aluno, {
    as: 'aluno',
    foreignKey: 'aluno_id'
});

module.exports = Aluno;