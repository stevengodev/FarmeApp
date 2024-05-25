import React, { useState, useEffect } from 'react';
import dataProductos from '../../data/products.json'

console.log(dataProductos.productos)

const productosArray = dataProductos.productos;
console.log(productosArray)

const ProductList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Simula una carga de datos
        setProductos(dataProductos.productos);
      }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Nombre</th>
                    <th >Descripcion</th>
                    <th >Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
       {productos.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.nombre}</td>
            <td>{product.descripcion}</td>
            <td>{product.precio}</td>
            <td colSpan="2" className="text-end">
                <button className="btn btn-primary me-2">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </td>
          </tr>
        ))}
            </tbody>
        </table>
    );
};

export default ProductList;