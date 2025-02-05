import React from "react";
import { Link } from "react-router-dom";

export function ItemProductos({datos}) {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {datos.map((producto) => (
          <div key={producto.id} className="card" style={{ width: "18rem" }}>
            <img
              src={producto.imagen}
              className="card-img-top"
              alt={producto.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: ${producto.precio}</li>
              <li className="list-group-item">
                Cantidad Disponible: {producto.cantidad}
              </li>
              <li className="list-group-item">Unidad: {producto.unidad}</li>
            </ul>
            <div className="card-body">
              <Link to={`/detalle/${producto.id}`} className="card-link">
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemProductos;
