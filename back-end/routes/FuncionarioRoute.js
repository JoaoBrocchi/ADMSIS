import express from 'express';
import funcionarioController from '../controllers/FuncionarioController.js';

const router = express.Router();


router.route('/funcionario')
  .get(funcionarioController.getAllFuncionarios)
  .post(funcionarioController.createFuncionario);

router.route('/:funcionarioId')
  .get(funcionarioController.getFuncionarioById)
  .put(funcionarioController.updateFuncionario)
  .delete(funcionarioController.deleteFuncionario);

export default router;
