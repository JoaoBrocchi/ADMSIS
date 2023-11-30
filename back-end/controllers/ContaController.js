import ContaBancaria from "../models/ContaModel.js"
import Cliente from "../models/ClienteModel.js"

class ContaBancariaController {
    static async getAllAccounts(req, res) {
      try {
        const contas = await ContaBancaria.findAll();
        return res.status(200).json(contas);
      } catch (error) {
        console.error('Erro ao buscar contas bancárias:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
    
    static async getAccountById(req, res) {
      const { accountId } = req.params;
      try {
        const conta = await ContaBancaria.findByPk(accountId, {
          include: Cliente, // Inclua informações do cliente associado à conta
        });
        if (!conta) {
          return res.status(404).json({ error: 'Conta bancária não encontrada' });
        }
        return res.status(200).json(conta);
      } catch (error) {
        console.error('Erro ao buscar conta bancária por ID:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
}
export default ContaBancariaController;