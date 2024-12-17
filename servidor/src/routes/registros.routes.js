/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  addRegistro,
  editRegistro,
  deleteRegistro,
  getRegistros,
  getRegistro
} from '../controllers/registro.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js'
import { registroSchema } from '../schemas/registro.schema.js';

const router = express.Router();

router.get('/gets', getRegistros);
router.get('/get/:id', getRegistro);
router.post('/add', addRegistro);
router.put('/edit/:id', validateSchema(registroSchema), editRegistro);
router.delete('/delete/:id', deleteRegistro);

export default router;