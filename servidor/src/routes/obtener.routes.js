/* Importamos el paquete express */
import express from "express";

/* Importamos otros archivos */
import {
  getAlumnos,
  getAlumno,
  getLibros,
  getLibro,
  getCategorias,
  getCategoria,
  getEditorials,
  getEditorial,
  getAutors,
  getAutor,
} from "../controllers/obtener.controller.js";

const router = express.Router();

router.get("/alumnos", getAlumnos);
router.get("/alumno/:id", getAlumno);
router.get("/libros", getLibros);
router.get("/libro/:id", getLibro);
router.get("/categorias", getCategorias);
router.get("/categoria/:id", getCategoria);
router.get("/editoriales", getEditorials);
router.get("/editorial/:id", getEditorial);
router.get("/autores", getAutors);
router.get("/autor/:id", getAutor);

export default router;
