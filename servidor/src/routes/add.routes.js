/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  addAlumno,
  addLibro,
  addAutor,
  addEditorial,
  addCategoria
} from '../controllers/add.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js'
import { alumnoSchema } from '../schemas/alumnos.schema.js';
import { libroSchema } from '../schemas/libros.schema.js';
import { autorSchema } from '../schemas/autores.schema.js';
import { editorialSchema } from '../schemas/editoriales.schema.js';
import { categoriaSchema } from '../schemas/categorias.schema.js';

const router = express.Router();

router.post('/alumno', validateSchema(alumnoSchema), addAlumno);
router.post('/libros', validateSchema(libroSchema), addLibro);
router.post('/categorias', validateSchema(categoriaSchema), addCategoria);
router.post('/editoriales', validateSchema(editorialSchema), addEditorial);
router.post('/autores', validateSchema(autorSchema), addAutor);

export default router;