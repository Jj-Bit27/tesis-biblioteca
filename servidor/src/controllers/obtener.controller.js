/* Importar Base de datos */
import { pool } from "../db/db.js";

/* Modulo de obtener todos los alumnos */
export const getAlumnos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM alumnos");

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener un alumno en espeficico */
export const getAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM alumnos WHERE id = ?", [
      id,
    ]);

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener todos los libros */
export const getLibros = async (req, res) => {
  try {
    const [result] = await pool.query(`
      SELECT 
      libros.id,
      libros.titulo,
      autores.nombre AS autor,
      editoriales.nombre AS editorial,
      categorias.nombre AS categoria,
      libros.existencias,
      libros.paginas
    FROM libros
    JOIN autores ON libros.id_autor = autores.id
    JOIN editoriales ON libros.id_editorial = editoriales.id
    JOIN categorias ON libros.id_categoria = categorias.id;
    `);

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener un libro en especifico */
export const getLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      `SELECT 
      libros.id,
      libros.titulo,
      autores.nombre AS autor,
      editoriales.nombre AS editorial,
      categorias.nombre AS categoria,
      libros.existencias,
      libros.paginas
    FROM libros
    JOIN autores ON libros.id_autor = autores.id
    JOIN editoriales ON libros.id_editorial = editoriales.id
    JOIN categorias ON libros.id_categoria = categorias.id WHERE id = ?`,
      [id]
    );

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener todas las categorias */
export const getCategorias = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM categorias");

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener una categoria en especifico */
export const getCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM categorias WHERE id = ?", [
      id,
    ]);

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener todas las editoriales */
export const getEditorials = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM editoriales");

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener una editorial */
export const getEditorial = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM editoriales WHERE id = ?",
      [id]
    );

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener todos los autores */
export const getAutors = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM autores");

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener un autor en especifico */
export const getAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("SELECT * FROM autores WHERE id = ?", [
      id,
    ]);

    res
      .json({
        id: result.insertId,
        result,
      })
      .status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
