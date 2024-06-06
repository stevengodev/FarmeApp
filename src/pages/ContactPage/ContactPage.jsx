import { useNavigate } from 'react-router-dom';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';
import CowBabiesForm  from '../../components/CowBabiesComponet/CowBabiesForm';
import ContactForm from '../../components/ContactComponent/ContactForm';
import React, { useEffect } from 'react';
import NavbarGlobal from '../../components/Navbar/NavBarGlobal';


const ContactPage = () => {

  useEffect(() => {
    // Cambiar el título de la pestaña
    document.title = 'Contacto';
  }, []); // Esto se ejecutará cada vez que el título cambie

  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };
  
    return (
      <div>
            <NavbarGlobal/>        
            <h1>Contacto</h1>
            <BusinessBar/>
            <ContactForm />
      </div>
    )
  
}

export default ContactPage;