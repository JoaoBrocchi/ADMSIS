import express from 'express';
import  transacaoController from "../controllers/HistoricoController"
const router = express.Router();

router.get('/transacoes', transacaoController.getAllTransactions);
router.get('/transacoes/:transactionId', transacaoController.getTransactionById);
router.post('/deposito', transacaoController.deposit);
router.post('/saque', transacaoController.withdraw);

export default router;