import { DataTypes } from "sequelize";
import db from "../db/connection.js";
import ContaBancaria from "./ContaModel.js";
import Cliente from "./ClienteModel.js";

const HistoricoInteracao = db.define('HistoricoInteracao', {
    dataHoraInteracao: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    tipoInteracao: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    usuarioResponsavel: {
      type: DataTypes.STRING,
    },
  });
  
Cliente.hasMany(HistoricoInteracao);
export default HistoricoInteracao;