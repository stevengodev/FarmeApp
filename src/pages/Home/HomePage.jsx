// HomePage.js
import React from 'react';
import HeaderHome from '../../components/Home/HeaderHome';
import BusinessCardAtHome from '../../components/Home/BusinessCardAtHome';
import ContactoHome from '../../components/Home/ContactoHome';

const HomePage = () => {

  return (
    <div>
      <HeaderHome />
      <BusinessCardAtHome />
      <ContactoHome />
    </div>
  );
};

export default HomePage;