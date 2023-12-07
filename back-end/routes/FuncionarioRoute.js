import express from 'express';
import funcionarioController from '../controllers/FuncionarioController.js';
import AutorizarVerificar from './caminho-para-o-arquivo/AutorizarVerificar.js';
import verifyToken from '../helpers/verifyToken.js';


const router = express.Router();
router.use(verifyToken);


router.route('/funcionario')
  .get(verifyToken,funcionarioController.getAllFuncionarios)
  .post(funcionarioController.createFuncionario);

router.route('/:funcionarioId')
  .get(verifyToken,funcionarioController.getFuncionarioById)
  .put(verifyToken,funcionarioController.updateFuncionario)
  .delete(verifyToken,funcionarioController.deleteFuncionario);

export default router;

