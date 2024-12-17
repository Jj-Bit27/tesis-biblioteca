/* Importar Base de datos */
import { pool } from '../db/db.js'

/* Modulo de añadir un alumno */
export const addAlumno = async (req, res) => {
  try {
    const { nombre, apellido, grado, grupo, num_control } = req.body;

    const [resultados] = await pool.query("SELECT * FROM alumnos WHERE num_control = ?", [
      num_control,
    ]);

    if (resultados.length === 1)
      return res.status(404).json({ message: "Ya esta registrado el alumno" });

    const [result] = await pool.query(
      "INSERT INTO alumnos (nombre, apellido, grado, grupo, num_control) VALUES (?, ?, ?, ?, ?)",
      [nombre, apellido, grado, grupo, num_control]
    );

    res.json({
      id: result.insertId,
      nombre, apellido, grado, grupo, num_control
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de añadir un libro */
export const addLibro = async (req, res) => {
  try {
    const { titulo, id_autor, id_editorial, id_categoria, existencias, num_paginas } = req.body;

    const [resultados] = await pool.query("SELECT * FROM libros WHERE titulo = ?", [
      titulo,
    ]);

    if (resultados.length === 1)
      return res.status(404).json({ message: "Ya esta el libro en el inventario" });

    const [result] = await pool.query(
      "INSERT INTO libros (titulo, id_autor, id_editorial, id_categoria, existencias, paginas) VALUES(?, ?, ?, ?, ?, ?)",
      [titulo, id_autor, id_editorial, id_categoria, existencias, num_paginas]
    );

    res.json({
      id: result.insertId,
      titulo, id_autor, id_editorial, id_categoria, existencias, num_paginas
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de añadir una categoria */
export const addCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    const [resultados] = await pool.query("SELECT * FROM categorias WHERE nombre = ?", [
      nombre,
    ]);

    if (resultados.length === 1)
      return res.status(404).json({ message: "Ya esta registrada la categoria" });

    const [result] = await pool.query(
      "INSERT INTO categorias (nombre) VALUES (?)",
      [nombre]
    );

    res.json({
      id: result.insertId,
      nombre
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de añadir una editorial */
export const addEditorial = async (req, res) => {
  try {
    const { nombre } = req.body;

    const [resultados] = await pool.query("SELECT * FROM editoriales WHERE nombre = ?", [
      nombre,
    ]);

    if (resultados.length === 1)
      return res.status(404).json({ message: "Ya esta registrada la editorial" });

    const [result] = await pool.query(
      "INSERT INTO editoriales (nombre) VALUES (?)",
      [nombre]
    );

    res.json({
      id: result.insertId,
      nombre
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de añadir un autor */
export const addAutor = async (req, res) => {
  try {
    const { nombre, apellido } = req.body;

    const [resultados] = await pool.query("SELECT * FROM autores WHERE nombre = ? AND apellido = ?", [
      nombre, apellido
    ]);

    if (resultados.length === 1)
      return res.status(404).json({ message: "Ya esta registrado el autor" });

    const [result] = await pool.query(
      "INSERT INTO autores (nombre, apellido) VALUES (?, ?)",
      [nombre, apellido]
    );

    res.json({
      id: result.insertId,
      nombre, apellido
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};