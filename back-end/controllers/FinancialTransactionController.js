import Transacao from "../models/TransationsModel.js" 
import ContaBancaria from "./ContaController.js";

class FinancialTransactionController {
  static async deposit(req, res) {
    const { accountId, valor } = req.body;

    try {
      const account = await ContaBancaria.findByPk(accountId);

      if (!account) {
        return res.status(404).json({ error: 'Conta bancária não encontrada' });
      }

      // Realizar a operação de depósito
      await account.update({ saldo: account.saldo + valor });

      // Registrar a transação
      await Transacao.create({
        ContaOrigemID: account.id,
        Valor: valor,
        TipoTransacao: 'Depósito',
      });

      return res.status(200).json({ message: 'Depósito realizado com sucesso' });
    } catch (error) {
      console.error('Erro ao realizar depósito:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async withdraw(req, res) {
    const { accountId, valor } = req.body;

    try {
      const account = await ContaBancaria.findByPk(accountId);

      if (!account) {
        return res.status(404).json({ error: 'Conta bancária não encontrada' });
      }

      if (account.saldo < valor) {
        return res.status(400).json({ error: 'Saldo insuficiente para saque' });
      }

      // Realizar a operação de saque
      await account.update({ saldo: account.saldo - valor });

      // Registrar a transação
      await Transacao.create({
        ContaOrigemID: account.id,
        Valor: valor,
        TipoTransacao: 'Saque',
      });

      return res.status(200).json({ message: 'Saque realizado com sucesso' });
    } catch (error) {
      console.error('Erro ao realizar saque:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  // Outros métodos conforme necessário
}

export default FinancialTransactionController
