// ContactInfo.js
import React, { useState } from 'react';

const ContactInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h3>Información de Contacto</h3>
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">Número de Teléfono:</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo Electrónico:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
