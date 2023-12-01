import { DataTypes } from "sequelize";
import db from "../db/connection.js"



const Funcionario = db.define('Funcionario', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DataNascimento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  DataCadastro: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: db.fn('NOW'), // ou use Sequelize.literal('CURRENT_TIMESTAMP') se necessário
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Funcionarios',
  timestamps: false, // Desativa timestamps padrão (createdAt, updatedAt)
  // Outras opções do modelo...
});

// Sincroniza o modelo com o banco de dados
// Somente use isso em desenvolvimento. Em produção, use migrations.

export default Funcionario