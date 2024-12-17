/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  addEntregado,
  editEntregado,
  deleteEntregado,
  getEntregados,
  getEntregado
} from '../controllers/entregado.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js'
import { entregadoSchema } from '../schemas/entregado.schema.js';

const router = express.Router();

router.get('/gets', getEntregados);
router.get('/get/:id', getEntregado);
router.post('/add', validateSchema(entregadoSchema), addEntregado);
router.put('/edit/:id', validateSchema(entregadoSchema), editEntregado);
router.delete('/delete/:id', deleteEntregado);

export default router;