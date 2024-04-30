// BusinessInfo.js
import React, { useState } from 'react';

const BusinessInfo = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');

  return (
    <div>
      <h3>Información del Negocio</h3>
      <div className="mb-3">
        <label htmlFor="businessName" className="form-label">Nombre del Negocio:</label>
        <input
          type="text"
          className="form-control"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="businessDescription" className="form-label">Descripción:</label>
        <textarea
          className="form-control"
          id="businessDescription"
          value={businessDescription}
          onChange={(e) => setBusinessDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default BusinessInfo;
