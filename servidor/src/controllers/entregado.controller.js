/* Importar Base de datos */
import { pool } from '../db/db.js'

/* Modulo de obtener todos los entregados */
export const getEntregados = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM entregados");

    res.json({
      id: result.insertId,
      result
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de obtener un solo entregado */
export const getEntregado = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query("SELECT * FROM entregados WHERE id = ?", [
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

/* Modulo de añadir una de entrega en la biblioteca */
export const addEntregado = async (req, res) => {
  try {
    const { estado } = req.body;

    const [result] = await pool.query(
      `INSERT INTO registros (estado) VALUES (?)`,
      [estado]
    );

    res.json({
      id: result.insertId,
      estado
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de editar una de entrega de la biblioteca */
export const editEntregado = async (req, res) => {
  try {
    const { id } = req.params
    const { estado } = req.body;

    const [resultados] = await pool.query("SELECT * FROM entregados WHERE id = ?", [
      id,
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "No se ha encontrado el dato" });

    const [result] = await pool.query(
      `UPDATE entregados
      SET estado = ?
      WHERE id = ?`,
      [estado, id]
    );

    res.json({
      id: result.insertId,
      estado
    }).status(201);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de eliminar una de entrega de la biblioteca */
export const deleteEntregado = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM entregados WHERE id = ?", [
      id,
    ]);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro el dato" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};