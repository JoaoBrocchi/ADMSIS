import { DataTypes } from "sequelize";
import db from "../db/connection.js"

const Cliente = db.define('Cliente', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CPFCNPJ: {
    type: DataTypes.STRING,
    allowNull: false,
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
    allowNull: true,
  },
  DataNascimento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  TipoCliente: {
    type: DataTypes.ENUM('Pessoa Física', 'Pessoa Jurídica'),
    allowNull: true,
  },
  DataCadastro: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: db.fn('NOW'), // ou use Sequelize.literal('CURRENT_TIMESTAMP') se necessário
  },
  Status: {
    type: DataTypes.ENUM('Ativo', 'Inativo'),
    allowNull: true,
  },
}, {
  tableName: 'Clientes',
  timestamps: false, // Desativa timestamps padrão (createdAt, updatedAt)
  // Outras opções do modelo...
});

// Sincroniza o modelo com o banco de dados
// Somente use isso em desenvolvimento. Em produção, use migrations.

export default Cliente