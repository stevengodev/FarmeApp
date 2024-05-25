import '../../assets/styles/tienda.css'
import React, { useEffect, useState, useReducer } from 'react';
import { cartReducer, initialCartState, showHTML }  from '../../utils/carrito';

// src/components/Carrito.js
import styled from 'styled-components';

// Estilos usando styled-components
const ContainerCartIcon = styled.button`
  /* Estilos para el ícono del carrito */
  position: relative;
`;

const ContainerCartProducts = styled.div`
  /* Estilos para el contenedor de productos del carrito */
  &.hidden-cart {
    display: none;
  }
`;

// Otros componentes estilizados según sea necesario

const Store = () => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    useEffect(() => {
      const productsList = document.querySelector('.container-items');
      const rowProduct = document.querySelector('.row-product');
      const valorTotal = document.querySelector('.total-pagar');
      const countProducts = document.querySelector('#contador-productos');
      const cartEmpty = document.querySelector('.cart-empty');
      const cartTotal = document.querySelector('.cart-total');
  
      const handleAddProduct = (e) => {
        if (e.target.classList.contains('btn-add-cart')) {
          const product = e.target.parentElement;
          const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
          };
          dispatch({ type: 'ADD_PRODUCT', payload: infoProduct });
        }
      };
  
      const handleRemoveProduct = (e) => {
        if (e.target.classList.contains('icon-close')) {
          const product = e.target.parentElement;
          const title = product.querySelector('p').textContent;
          dispatch({ type: 'REMOVE_PRODUCT', payload: { title } });
        }
      };
  
      if (productsList) {
        productsList.addEventListener('click', handleAddProduct);
      }
  
      if (rowProduct) {
        rowProduct.addEventListener('click', handleRemoveProduct);
      }
  
      return () => {
        if (productsList) {
          productsList.removeEventListener('click', handleAddProduct);
        }
  
        if (rowProduct) {
          rowProduct.removeEventListener('click', handleRemoveProduct);
        }
      };
    }, [state.allProducts]);
  
    useEffect(() => {
      const rowProduct = document.querySelector('.row-product');
      const valorTotal = document.querySelector('.total-pagar');
      const countProducts = document.querySelector('#contador-productos');
      const cartEmpty = document.querySelector('.cart-empty');
      const cartTotal = document.querySelector('.cart-total');
      showHTML(state.allProducts, rowProduct, valorTotal, countProducts, cartEmpty, cartTotal);
    }, [state.allProducts]);
  
    useEffect(() => {
      const btnCart = document.querySelector('.container-cart-icon');
      const containerCartProducts = document.querySelector('.container-cart-products');
  
      const toggleCart = () => {
        containerCartProducts.classList.toggle('hidden-cart');
      };
  
      if (btnCart) {
        btnCart.addEventListener('click', toggleCart);
      }
  
      return () => {
        if (btnCart) {
          btnCart.removeEventListener('click', toggleCart);
        }
      };
    }, []);

    return (
        <>
            <header>
                <h1>Tienda</h1>

                <div className="container-icon">
                    <div className="container-cart-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="icon-cart"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                            />
                        </svg>
                        <div className="count-products">
                            <span id="contador-productos">0</span>
                        </div>
                    </div>

                    <div className="container-cart-products hidden-cart">
                        <div className="row-product hidden">
                            <div className="cart-product">
                                <div className="info-cart-product">
                                    <span className="cantidad-producto-carrito">1</span>
                                    <p className="titulo-producto-carrito">Zapatos Nike</p>
                                    <span className="precio-producto-carrito">$80</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="icon-close"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="cart-total hidden">
                            <h3>Total:</h3>
                            <span className="total-pagar">$200</span>
                        </div>
                        <p className="cart-empty">El carrito está vacío</p>
                    </div>
                </div>
            </header>

            <div className="container-items">

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>

                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Zapatos Nike</h2>
                        <p className="price">$80</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Audifonos</h2>
                        <p className="price">$20</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Reloj</h2>
                        <p className="price">$50</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Smartwatch</h2>
                        <p className="price">$90</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>
                <div className="item">
                    <figure>
                        <img
                            src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                            alt="producto"
                        />
                    </figure>
                    <div className="info-product">
                        <h2>Perfume</h2>
                        <p className="price">$50</p>
                        <button className="btn-add-cart">Añadir al carrito</button>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Store;
