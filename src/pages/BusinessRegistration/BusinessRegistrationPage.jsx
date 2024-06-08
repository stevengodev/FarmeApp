import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessForm from './BusinessForm.jsx'
import NavbarGlobal from '../../components/Navbar/NavBarGlobal.jsx';
import NavBarBusiness from './NavBarBusiness.jsx';
import AccessibilityButton from '../../components/Accessibility/AccessibilityButton';

const FarmForm = () => {

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = 'Registrar negocio';
  }, []); // Esto se ejecutará cada vez que el título cambie

  return <>
    <NavbarGlobal/>
    <NavBarBusiness/>
    <BusinessForm/>
    <AccessibilityButton />

  </>
};

export default FarmForm;
