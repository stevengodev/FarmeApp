// HomePage.js
import React from 'react';
import BusinessCardAtHome from '../../components/Home/BusinessCardAtHome';
import ContactoHome from '../../components/Home/ContactoHome';
import NavbarHome from '../../components/Home/NavBarHome';
import PresentationImage from '../../components/Home/PresentationImage';
const HomePage = () => {

  return (
    <div>
      <NavbarHome/>
      <PresentationImage/>

      <BusinessCardAtHome />
      <ContactoHome />
    </div>
  );
};

export default HomePage;