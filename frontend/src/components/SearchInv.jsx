const SearchInv = ({
  filtro,
  setFiltro,
  opciones,
  busqueda,
  setBusqueda,
  realizarBusqueda,
  seleccion,
  setSeleccion,
}) => {
  return (
    <>
      <div className="flex items-center gap-2">
        {/* Filtro */}
        <select
          className="border rounded px-2 py-1 text-xs"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          <option value="autores">Autor</option>
          <option value="categorias">Categoría</option>
          <option value="editoriales">Editorial</option>
        </select>

        {/* Dropmenu dinámico */}
        <select
          className="border rounded px-2 py-1 text-xs"
          value={seleccion}
          onChange={(e) => setSeleccion(e.target.value)}
        >
          <option value="">Selecciona una opción</option>
          {opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.nombre}>
              {opcion.nombre}
            </option>
          ))}
        </select>

        {/* Input de búsqueda */}
        <input
          type="text"
          className="border rounded px-2 py-1 text-xs flex-grow"
          placeholder="Escribe aquí..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        {/* Botón de búsqueda */}
        <button
          className="bg-blue-500 text-white rounded px-3 py-1 text-xs hover:bg-blue-600"
          onClick={realizarBusqueda}
        >
          Buscar
        </button>
      </div>
    </>
  );
};

export default SearchInv;
