import Transacao from "../models/TransationsModel"
class TransacaoController {
    async getAllTransactions(req, res) {
      try {
        const transacoes = await Transacao.findAll();
        return res.status(200).json(transacoes);
      } catch (error) {
        console.error('Erro ao buscar transações:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    async getTransactionById(req, res) {
      const { transactionId } = req.params;
      try {
        const transacao = await Transacao.findByPk(transactionId, {
          include: [
            { model: ContaBancaria, as: 'ContaOrigem' }, // Inclua informações da conta de origem
            { model: ContaBancaria, as: 'ContaDestino' }, // Inclua informações da conta de destino
          ],
        });
        if (!transacao) {
          return res.status(404).json({ error: 'Transação não encontrada' });
        }
        return res.status(200).json(transacao);
      } catch (error) {
        console.error('Erro ao buscar transação por ID:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    // Outros métodos conforme necessário
  }