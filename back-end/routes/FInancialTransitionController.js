import express from 'express';
import financialTransactionController from '../controllers/financialTransactionController.js';
import verifyToken from '../helpers/verifyToken.js';
const router = express.Router();
router.use(verifyToken);

router.route('/deposito')
  .post(financialTransactionController.deposit);

router.route('/saque')
  .post(financialTransactionController.withdraw);

 
export default router;