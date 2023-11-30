import express from 'express';
import contaController from "../controllers/ContaController.js"
const router = express.Router();

router.get('/contas', contaController.getAllAccounts);
router.get('/contas/:accountId', contaController.getAccountById);
// router.post('/contas', contaController.createAccount);
// router.delete('/contas/:accountId', contaController.deleteAccount);

export default router