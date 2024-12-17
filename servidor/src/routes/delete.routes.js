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
router.delete('/libros/:id', deleteLibro);
router.delete('/categorias/:id', deleteCategoria);
router.delete('/editoriales/:id', deleteEditorial);
router.delete('/autores/:id', deleteAutor);

export default router;