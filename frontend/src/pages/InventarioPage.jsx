export default function Inventario() {
  return (
    <div>
      <div className="buscador">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar Por Nombre"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success bg-green text-light border-dark"
            type="submit"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
