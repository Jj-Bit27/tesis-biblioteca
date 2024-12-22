/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  deleteLibro,
  deleteAutor,
  deleteEditorial,
  deleteCategoria,
  deleteAlumno
} from '../controllers/delete.controller.js';

const router = express.Router();

router.delete('/alumno/:id', deleteAlumno);
router.delete('/libro/:id', deleteLibro);
router.delete('/categoria/:id', deleteCategoria);
router.delete('/editorial/:id', deleteEditorial);
router.delete('/autor/:id', deleteAutor);

export default router;