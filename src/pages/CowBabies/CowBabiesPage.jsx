import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';
import CowBabiesForm  from '../../components/CowBabiesComponet/CowBabiesForm';
import NavbarGlobal from "../../components/Navbar/NavBarGlobal";
import React, { useEffect } from 'react';

const CowBabiesPage = () => {

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = 'Terneros';
  }, []); // Esto se ejecutará cada vez que el título cambie

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>            

            <NavbarGlobal/>
            <h1>Registro de Terneros</h1>
            <BusinessBar/>
            <CowBabiesForm/>

      </div>
    )
  
}

export default CowBabiesPage;