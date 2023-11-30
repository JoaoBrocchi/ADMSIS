import { DataTypes } from "sequelize";
import db from "../db/connection";

const Cliente = db.define('Cliente', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpfcnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    dataNascimento: {
      type: DataTypes.DATE,
    },
    tipoCliente: {
      type: DataTypes.ENUM('Pessoa Física', 'Pessoa Jurídica'),
    },
    dataCadastro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM('Ativo', 'Inativo'),
      defaultValue: 'Ativo',
    },
  });
export default Cliente