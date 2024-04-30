import React from 'react';
import BusinessInfo from './BusinessInfo';
import ContactInfo from './ContactInfo';
import BusinessLocation from './BusinessLocation';

const BusinessRegistrationPage = () => {
  const handleSubmit = (e) => {
    // Aquí puedes manejar la lógica para enviar los datos del formulario al servidor
    e.preventDefault();
    console.log('Datos del negocio registrados:', e.target);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Registro de Negocio</h2>
          <form onSubmit={handleSubmit}>
            <BusinessInfo />
            <ContactInfo />
            <BusinessLocation />
            <button type='submit' className="btn btn-primary">Registrar negocio</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistrationPage;
