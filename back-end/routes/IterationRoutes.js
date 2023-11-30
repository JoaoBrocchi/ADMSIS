import express from 'express';
import  transacaoController from "../controllers/Iterationscontroller"
const router = express.Router();

router.get('/historico', historicoController.getAllInteractions);
router.get('/historico/:interactionId', historicoController.getInteractionById);

export default router;