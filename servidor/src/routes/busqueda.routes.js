/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  getSearchLibro,
} from '../controllers/busqueda.controller.js';

const router = express.Router();

router.get('/libro', getSearchLibro);

export default router;