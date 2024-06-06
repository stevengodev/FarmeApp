import ProductList from "../../components/ProductManagement/ProductList"
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import ProductForm from "../../components/ProductManagement/ProductForm"
import BusinessBar from '../../components/BuisnessBar/Buisnessbar';
import NavbarGlobal from "../../components/Navbar/NavBarGlobal";

const ProductListPage = () => {

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = 'Lista de productos';
  }, []); // Esto se ejecutará cada vez que el título cambie

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };

  return <>

    <NavbarGlobal />

    <h2>Productos</h2>
    <BusinessBar />
    <ProductForm />
    <ProductList />

  </>

}

export default ProductListPage;