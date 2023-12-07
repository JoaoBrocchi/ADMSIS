import express from 'express';
import contaController from "../controllers/ContaController.js"
import verifyToken from '../helpers/verifyToken.js';
const router = express.Router();
router.use(verifyToken);
router.get('/contas', contaController.getAllAccounts);
router.get('/contas/:accountId', contaController.getAccountById);
// router.post('/contas', contaController.createAccount);
// router.delete('/contas/:accountId', contaController.deleteAccount);

export default router