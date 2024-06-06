import StaffList from "../../components/StaffRegistrationForm/StaffList";
import { useNavigate } from 'react-router-dom';
import FormBulls from "../../components/BullComponet/FormBulls";
import BusinessBar from '../../components/BuisnessBar/Buisnessbar';
import NavbarGlobal from "../../components/Navbar/NavBarGlobal";
import React, { useEffect } from 'react';

const BullPage = () => {

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = 'Toros';
  }, []); // Esto se ejecutará cada vez que el título cambie

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };

  return (
    <div>
      <NavbarGlobal />
      <h1>Registro de Toros</h1>
      <BusinessBar />
      <FormBulls />
    </div>
  )

}

export default BullPage;