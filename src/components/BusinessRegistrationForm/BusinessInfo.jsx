// BusinessInfo.js
import React, { useState } from 'react';

const BusinessInfo = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');

  return (
    <div>
      <h4>Información del Negocio</h4>
      <div className="mb-3">
        <label className="form-label">Nombre del Negocio:</label>
        <input
          type="text"
          className="form-control"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Direccion / ubicacion:</label>
        <input
          type='text'
          className="form-control"
          id="businessLocation"
          value={businessLocation}
          onChange={(e) => setBusinessLocation(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default BusinessInfo;
