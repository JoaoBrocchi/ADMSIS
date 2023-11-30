import express from 'express';
import clientController from '../controllers/ClienteController.js';

const router = express.Router();

router.route('/clientes')
  .get(clientController.getAllClients)
  .post(clientController.createClient);

router.route('/clientes/:clientId')
  .get(clientController.getClientById)
  .put(clientController.updateClient)
  .delete(clientController.deleteClient);

export default router;