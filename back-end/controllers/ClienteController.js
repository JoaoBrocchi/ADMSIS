import Cliente from "../models/ClienteModel.js"

class ClientController {
    static async getAllClients(req, res) {
      try {
        const clients = await Cliente.findAll();
        return res.status(200).json(clients);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    static async getClientById(req, res) {
      const { clientId } = req.params;
      try {
        const client = await Cliente.findByPk(clientId);
        if (!client) {
          return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        return res.status(200).json(client);
      } catch (error) {
        console.error('Erro ao buscar cliente por ID:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    static async createClient(req, res) {
      const { Nome, cpfcnpj, endereco, telefone, email, dataNascimento, tipoCliente } = req.body;
      try {
        const newClient = await Cliente.create({
          Nome,
          cpfcnpj,
          endereco,
          telefone,
          email,
          dataNascimento,
          tipoCliente,
        });
        return res.status(201).json(newClient);
      } catch (error) {
        console.error('Erro ao criar cliente:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    static async updateClient(req, res) {
      const { clientId } = req.params;
      const { nome, cpfcnpj, endereco, telefone, email, dataNascimento, tipoCliente } = req.body;
      try {
        const client = await Cliente.findByPk(clientId);
        if (!client) {
          return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        await client.update({
          nome,
          cpfcnpj,
          endereco,
          telefone,
          email,
          dataNascimento,
          tipoCliente,
        });
        return res.status(200).json(client);
      } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  
    static async deleteClient(req, res) {
      const { clientId } = req.params;
      try {
        const client = await Cliente.findByPk(clientId);
        if (!client) {
          return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        await client.destroy();
        return res.status(204).end();
      } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  }
export default ClientController;