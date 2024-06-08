import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FarmsList from '../../components/Farms/FarmsList';
import NavbarGlobal from "../../components/Navbar/NavBarGlobal";
import Pagination from '../../components/Pagination/Pagination'
import AccessibilityButton from '../../components/Accessibility/AccessibilityButton';

const FarmsListPage = () => {

    useEffect(() => {
        // Cambiar el título de la pestaña
        document.title = 'Negocios';
    }, []); // Esto se ejecutará cada vez que el título cambie

    return <>

        <NavbarGlobal />
        <h1>Negocios</h1>
        <FarmsList />
        <Pagination/>
        <AccessibilityButton />

    </>

}
export default FarmsListPage;
