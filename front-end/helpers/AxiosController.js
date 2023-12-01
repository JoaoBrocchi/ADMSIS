import axios from 'axios';
const dotenvModule = await import("dotenv");
const dotenv = dotenvModule.default;

// Agora você pode usar o dotenv normalmente
dotenv.config();

class CrudController {
  constructor(apiUrl) {
    this.apiUrl = process.env.REACT_APP_ENDERECO + apiUrl
  }

  async getAll() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar itens: ${error.message}`);
      throw new Error('Erro ao buscar itens');
    }
  }

  async getById(id) {
    try {
      const response = await axios.get(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar item por ID: ${error.message}`);
      throw new Error('Erro ao buscar item por ID');
    }
  }

  async create(data) {
    try {
      const response = await axios.post(this.apiUrl, data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar item: ${error.message}`);
      throw new Error('Erro ao criar item');
    }
  }

  async update(id, data) {
    try {
      const response = await axios.put(`${this.apiUrl}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar item: ${error.message}`);
      throw new Error('Erro ao atualizar item');
    }
  }

  async delete(id) {
    try {
      const response = await axios.delete(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao excluir item: ${error.message}`);
      throw new Error('Erro ao excluir item');
    }
  }
}

export default CrudController;
