import Funcionario from "../models/FuncionarioModel.js";

import createFuncionarioToken from "../helpers/createFuncionarioToken.js"
import getToken from "../helpers/getToken.js";
import bcrypt from "bcrypt"

import { Jwt } from "jsonwebtoken";
class FuncionarioController {
  static async getAllFuncionarios(req, res) {
    try {
      const funcionarios = await Funcionario.findAll();
      return res.status(200).json(funcionarios);
    } catch (error) {
      console.error('Erro ao buscar funcionários:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async getFuncionarioById(req, res) {
    const { funcionarioId } = req.params;
    try {
      const funcionario = await Funcionario.findByPk(funcionarioId);
      if (!funcionario) {
        return res.status(404).json({ error: 'Funcionário não encontrado' });
      }
      return res.status(200).json(funcionario);
    } catch (error) {
      console.error('Erro ao buscar funcionário por ID:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async createFuncionario(req, res) {
    const { Nome, CPF, Endereco, Telefone, Email, DataNascimento, Password } = req.body;
    
    
    try {
      const newFuncionario = await Funcionario.create({
        Nome,
        CPF,
        Endereco,
        Telefone,
        Email,
        DataNascimento,
        Password,
      });
      await createFuncionarioToken(newFuncionario,req,res)
      return res.status(201).json(newFuncionario);
    } catch (error) {
      console.error('Erro ao criar funcionário:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  static async LoginFuncionario(req, res) {
    const { Email, Password } = req.body;
  
    try {
      const funcionario = await Funcionario.findOne({ Email: Email });
  
      if (funcionario) {
        // O funcionário foi encontrado, você pode prosseguir com a lógica de autenticação.
        // Compare a senha, etc.
        // Exemplo:
        if (funcionario.Password === Password) {
          // Senha correta, continue com a autenticação.
          res.status(200).json({ message: 'Autenticação bem-sucedida', funcionario });

          await createFuncionarioToken(user, req, res)

        } else {
          // Senha incorreta
          res.status(401).json({ message: 'Senha incorreta' });
          
        }
      } else {
        // Funcionário não encontrado
        res.status(404).json({ message: 'Funcionário não encontrado' });
      }
    } catch (error) {
      // Trate erros durante a consulta ao banco de dados
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
  

  static async updateFuncionario(req, res) {
    const { funcionarioId } = req.params;
    const { Nome, CPF, Endereco, Telefone, Email, DataNascimento, Password } = req.body;
    try {
      const funcionario = await Funcionario.findByPk(funcionarioId);
      if (!funcionario) {
        return res.status(404).json({ error: 'Funcionário não encontrado' });
      }
      await funcionario.update({
        Nome,
        CPF,
        Endereco,
        Telefone,
        Email,
        DataNascimento,
        Password,
      });
      return res.status(200).json(funcionario);
    } catch (error) {
      console.error('Erro ao atualizar funcionário:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  static async deleteFuncionario(req, res) {
    const { funcionarioId } = req.params;
    try {
      const funcionario = await Funcionario.findByPk(funcionarioId);
      if (!funcionario) {
        return res.status(404).json({ error: 'Funcionário não encontrado' });
      }
      await funcionario.destroy();
      return res.status(204).end();
    } catch (error) {
      console.error('Erro ao excluir funcionário:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default FuncionarioController;
