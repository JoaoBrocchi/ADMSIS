import express from 'express';
import clientController from '../controllers/ClienteController.js';
import verifyToken from "../helpers/verifyToken.js"
const router = express.Router();
router.use(verifyToken);
router.route(verifyToken,'/clientes')
  .get(clientController.getAllClients)
  .post(clientController.createClient);

router.route('/clientes/:clientId')
  .get(clientController.getClientById)
  .put(clientController.updateClient)
  .delete(clientController.deleteClient);

export default router;