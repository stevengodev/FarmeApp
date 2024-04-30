import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Lista de productos</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
