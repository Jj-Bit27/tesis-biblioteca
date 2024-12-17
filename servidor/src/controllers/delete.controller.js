/* Importar Base de datos */
import { pool } from '../db/db.js'

/* Modulo de eliminar un alumno */
export const deleteAlumno = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM alumnos WHERE id = ?", [
      id,
    ]);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro el estudiante" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de eliminar un libro */
export const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM libros WHERE id = ?", [
      id,
    ]);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro el libro" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de eliminar una categoria */
export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM categorias WHERE id = ?", [
      id,
    ]);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro la categoria" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de eliminar una editorial */
export const deleteEditorial = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM editoriales WHERE id = ?", [
      id,
    ]);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro el editorial" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de eliminar un autor */
export const deleteAutor = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM autores WHERE id = ?", [
      id,
    ]);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro el autor" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};