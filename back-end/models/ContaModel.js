import { DataTypes } from "sequelize";
import db from "../db/connection.js";
import Cliente from "./ClienteModel.js";


const ContaBancaria = db.define('ContaBancaria', {
    numeroConta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoConta: {
      type: DataTypes.ENUM('Corrente', 'Poupança'),
    },
    saldo: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.0,
    },
    dataAbertura: {
      type: DataTypes.DATE,
    },
    status: {
      type: DataTypes.ENUM('Ativa', 'Inativa'),
      defaultValue: 'Ativa',
    },
  });
Cliente.hasMany(ContaBancaria);
ContaBancaria.belongsTo(Cliente);


export default ContaBancaria
