import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessForm from './BusinessForm.jsx'
import NavbarGlobal from '../../components/Navbar/NavBarGlobal.jsx';
import NavBarBusiness from './NavBarBusiness.jsx';

const FarmForm = () => {

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = 'Registrar negocio';
  }, []); // Esto se ejecutará cada vez que el título cambie

  return <>
    <NavbarGlobal/>

    <h1>Registrar finca / negocio</h1>

    <NavBarBusiness/>
    <BusinessForm/>

  </>
};

export default FarmForm;
