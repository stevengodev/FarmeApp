// BusinessInfo.js
import React, { useState } from 'react';

const BusinessLocation = () => {
  const [businessAddress, setbusinessAddress] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');

  return (
    <div>
      <h3>Direccion del Negocio</h3>
      <div className="mb-3">
        <label htmlFor="businessAddress" className="form-label">Direccion del negocio:</label>
        <input
          type="text"
          className="form-control"
          id="businessAddress"
          value={businessAddress}
          onChange={(e) => setbusinessAddress(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="businessDescription" className="form-label">:</label>
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

export default BusinessLocation;