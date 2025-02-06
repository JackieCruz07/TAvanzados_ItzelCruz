import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function ItemProductos({datos}) {
  return (
      <div className="container">
        <h2>Lista de Productos</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {datos.map((producto) => (
            <div key={producto.id} className="col">
              <Card style={{ width: '18rem' }} className="h-100">
                <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Precio: ${producto.precio}</ListGroup.Item>
                  <ListGroup.Item>Cantidad Disponible: {producto.cantidad}</ListGroup.Item>
                  <ListGroup.Item>Unidad: {producto.unidad}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Link to={`/detalle/${producto.id}`} className="card-link">
                    Ver Detalles
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
  );
}

export default ItemProductos;
