import express from 'express';
import financialTransactionController from '../controllers/financialTransactionController.js';

const router = express.Router();


router.route('/deposito')
  .post(financialTransactionController.deposit);

router.route('/saque')
  .post(financialTransactionController.withdraw);

 
export default router;