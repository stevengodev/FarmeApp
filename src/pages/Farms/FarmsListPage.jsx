import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FarmsList from '../../components/Farms/FarmsList';
import NavbarGlobal from "../../components/Navbar/NavBarGlobal";
import Pagination from '../../components/Pagination/Pagination'



const FarmsListPage = () => {

    useEffect(() => {
        // Cambiar el título de la pestaña
        document.title = 'Lista de negocios';
    }, []); // Esto se ejecutará cada vez que el título cambie

    return <>

        <NavbarGlobal />
        <h1>Lista de negocios</h1>
        <FarmsList />
        <Pagination/>

    </>

}
export default FarmsListPage;
