/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  editLibro,
  editAutor,
  editEditorial,
  editCategoria,
  editAlumno
} from '../controllers/edit.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js'
import { alumnoSchema } from '../schemas/alumnos.schema.js';
import { libroSchema } from '../schemas/libros.schema.js';
import { autorSchema } from '../schemas/autores.schema.js';
import { editorialSchema } from '../schemas/editoriales.schema.js';
import { categoriaSchema } from '../schemas/categorias.schema.js';

const router = express.Router();

router.put('/alumno/:id', validateSchema(alumnoSchema), editAlumno);
router.put('/libro/:id', validateSchema(libroSchema), editLibro);
router.put('/categoria/:id', validateSchema(categoriaSchema), editCategoria);
router.put('/editorial/:id', validateSchema(editorialSchema), editEditorial);
router.put('/autor/:id', validateSchema(autorSchema), editAutor);

export default router;