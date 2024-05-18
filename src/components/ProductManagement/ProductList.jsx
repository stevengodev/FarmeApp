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
                </tr>
            </thead>
            <tbody>
       {productos.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.nombre}</td>
            <td>{product.descripcion}</td>
            <td>{product.precio}</td>
          </tr>
        ))}
            </tbody>
        </table>
    );
};

export default ProductList;