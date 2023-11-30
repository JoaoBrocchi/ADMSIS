
import { DataTypes } from "sequelize";
import db from "../db/connection";

const Transacao = sequelize.define('Transacao', {
    valor: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    tipoTransacao: {
      type: DataTypes.ENUM('Depósito', 'Saque', 'Transferência'),
    },
    dataHora: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
ContaBancaria.hasMany(Transacao, { foreignKey: 'ContaOrigemID' });
ContaBancaria.hasMany(Transacao, { foreignKey: 'ContaDestinoID' });
export default Transacao;