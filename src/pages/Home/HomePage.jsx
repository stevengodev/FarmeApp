// HomePage.js
import React from 'react';
import BusinessCardAtHome from '../../components/Home/BusinessCardAtHome';
import ContactoHome from '../../components/Home/ContactoHome';
import NavbarHome from '../../components/Home/NavBarHome';
import PresentationImage from '../../components/Home/PresentationImage';
import AccessibilityButton from '../../components/Accessibility/AccessibilityButton';
const HomePage = () => {

  return (
    <div>
      <NavbarHome/>
      <PresentationImage/>

      <BusinessCardAtHome />
      <ContactoHome />

      < AccessibilityButton />
    </div>
  );
};

export default HomePage;