import { pool } from "../db/db.js";

export const getSearchLibro = async (req, res) => {
  try {
    const { filtro, titulo, opcion } = req.query;

    const filtrosValidos = ["autores", "categorias", "editoriales"];
    if (!filtrosValidos.includes(filtro)) {
      return res.status(400).json({ message: "El filtro proporcionado no es válido." });
    }

    let columna;
    switch (filtro) {
      case "autores":
        columna = "autores.nombre";
        break;
      case "categorias":
        columna = "categorias.nombre";
        break;
      case "editoriales":
        columna = "editoriales.nombre";
        break;
    }

    const query = `
      SELECT 
        libros.id,
        libros.titulo,
        libros.paginas,
        libros.existencias,
        autores.nombre AS autor,
        editoriales.nombre AS editorial,
        categorias.nombre AS categoria
      FROM libros
      JOIN autores ON libros.id_autor = autores.id
      JOIN editoriales ON libros.id_editorial = editoriales.id
      JOIN categorias ON libros.id_categoria = categorias.id
      WHERE libros.titulo LIKE ? AND ${columna} LIKE ?;
    `;

    // Realizar la consulta a la base de datos
    const [result] = await pool.query(query, [`%${titulo}%`, `%${opcion}%`]);

    // Manejar resultados vacíos
    if (result.length === 0) {
      return res.status(404).json({ message: "No se encontraron libros." });
    }

    // Enviar resultados
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error al buscar libros:", error);
    return res.status(500).json({ message: "Error interno del servidor." });
  }
};