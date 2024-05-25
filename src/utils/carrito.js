// src/utils/carrito.js
export const initialCartState = {
	allProducts: [],
  };
  
  export const cartReducer = (state, action) => {
	switch (action.type) {
	  case 'ADD_PRODUCT':
		const product = action.payload;
		const existingProductIndex = state.allProducts.findIndex(p => p.title === product.title);
		if (existingProductIndex !== -1) {
		  const updatedProducts = state.allProducts.map((p, index) => {
			if (index === existingProductIndex) {
			  return { ...p, quantity: p.quantity + 1 };
			}
			return p;
		  });
		  return { ...state, allProducts: updatedProducts };
		}
		return { ...state, allProducts: [...state.allProducts, product] };
	  case 'REMOVE_PRODUCT':
		return { ...state, allProducts: state.allProducts.filter(p => p.title !== action.payload.title) };
	  default:
		return state;
	}
  };
  
  export const showHTML = (allProducts, rowProduct, valorTotal, countProducts, cartEmpty, cartTotal) => {
	if (!allProducts.length) {
	  cartEmpty.classList.remove('hidden');
	  rowProduct.classList.add('hidden');
	  cartTotal.classList.add('hidden');
	} else {
	  cartEmpty.classList.add('hidden');
	  rowProduct.classList.remove('hidden');
	  cartTotal.classList.remove('hidden');
	}
  
	// Limpiar HTML
	rowProduct.innerHTML = '';
  
	let total = 0;
	let totalOfProducts = 0;
  
	allProducts.forEach(product => {
	  const containerProduct = document.createElement('div');
	  containerProduct.classList.add('cart-product');
  
	  containerProduct.innerHTML = `
		<div class="info-cart-product">
		  <span class="cantidad-producto-carrito">${product.quantity}</span>
		  <p class="titulo-producto-carrito">${product.title}</p>
		  <span class="precio-producto-carrito">${product.price}</span>
		</div>
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  fill="none"
		  viewBox="0 0 24 24"
		  stroke-width="1.5"
		  stroke="currentColor"
		  class="icon-close"
		>
		  <path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6 18L18 6M6 6l12 12"
		  />
		</svg>
	  `;
  
	  rowProduct.append(containerProduct);
  
	  total = total + parseInt(product.quantity * product.price.slice(1));
	  totalOfProducts = totalOfProducts + product.quantity;
	});
  
	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
  };
  