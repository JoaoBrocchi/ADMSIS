import  HistoricoInteracao from "../models/IterationsHistory"
class HistoricoInteracaoController {
    async getAllInteractions(req, res) {
      try {
        const interacoes = await HistoricoInteracao.findAll();
        return res.status(200).json(interacoes);
      } catch (error) {
        console.error('Erro ao buscar histórico de interações:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    async getInteractionById(req, res) {
      const { interactionId } = req.params;
      try {
        const interacao = await HistoricoInteracao.findByPk(interactionId, {
          include: Cliente, // Inclua informações do cliente associado à interação
        });
        if (!interacao) {
          return res.status(404).json({ error: 'Interação não encontrada' });
        }
        return res.status(200).json(interacao);
      } catch (error) {
        console.error('Erro ao buscar interação por ID:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    // Outros métodos conforme necessário
  }