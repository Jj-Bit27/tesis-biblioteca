/* Importar Base de datos */
import { pool } from '../db/db.js'

/* Modulo de obtener todos los registros */
export const getRegistros = async (req, res) => {
  try {
    const [result] = await pool.query(`
    SELECT 
      registros.id,
      alumnos.nombre AS alumno,
      libros.titulo AS libro,
      registros.inicio,
      registros.fin,
      entregados.estado AS estado
    FROM registros
    JOIN alumnos ON registros.id_alumno = alumnos.id
    JOIN libros ON registros.id_libro = libros.id
    JOIN entregados ON registros.id_entregado = entregados.id`);

    res.json({
      id: result.insertId,
      result
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener solo un registro */
export const getRegistro = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query(`
    SELECT 
      registros.id,
      alumnos.nombre AS alumno,
      libros.titulo AS libro,
      registros.inicio,
      registros.fin,
      entregado.estado_entrega AS estado
    FROM registros
    JOIN alumnos ON registros.id_alumno = alumnos.id
    JOIN libros ON registros.id_libro = libros.id
    JOIN entregados ON registros.id_entregado = entregados.id
    WHERE id = ?`, [
      id,
    ]);

    res.json({
      id: result.insertId,
      result
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de añadir un registro en la biblioteca */
export const addRegistro = async (req, res) => {
  try {
    const { id_alumno, id_libro, inicio, fin, id_entregado } = req.body;

    const [result] = await pool.query(
      `INSERT INTO registros (id_alumno, id_libro, inicio, fin, id_entregado) VALUES (?, ?, ?, ?, ?)`,
      [id_alumno, id_libro, inicio, fin, id_entregado]
    );

    res.json({
      id: result.insertId,
      id_alumno, id_libro, inicio, fin, id_entregado
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de editar un registro de la biblioteca */
export const editRegistro = async (req, res) => {
  try {
    const { id } = req.params
    const { id_alumno, id_libro, inicio, fin, id_entregado } = req.body;

    const [resultados] = await pool.query("SELECT * FROM libros WHERE id = ?", [
      id,
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "No se ha encontrado el libro" });

    const [result] = await pool.query(
      `UPDATE registros
      SET id_alumno = ?, id_libro = ?, inicio = ?, fin = ?, id_entregado = ?
      WHERE id = ?`,
      [id_alumno, id_libro, inicio, fin, id_entregado, id]
    );

    res.json({
      id: result.insertId,
      id_alumno, id_libro, inicio, fin, id_entregado
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de eliminar un registro de la biblioteca */
export const deleteRegistro = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM registros WHERE id = ?", [
      id,
    ]).status(201);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro el registro a borrar" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};