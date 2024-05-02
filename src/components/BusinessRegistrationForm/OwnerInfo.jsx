// ContactInfo.js
import React, { useState } from 'react';

const OwnerInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idOwner, setIdOwner] = useState('');
  const [nameOwner, setNameOwner] = useState('');
  const [lastnameOwner, setLastnameOwner] = useState('');
  const [birthDateOwner, setBirthDateOwner] = useState('');

  return (
    <div>

      <h4>Información del dueño</h4>

      <div className="mb-3">
        <label className="form-label">Numero de identificacion</label>
        <input
          type="text"
          className="form-control"
          id="idOwner"
          value={idOwner}
          onChange={(e) => setIdOwner(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nameOwner"
          value={nameOwner}
          onChange={(e) => setNameOwner(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="lastnameOwner"
          value={lastnameOwner}
          onChange={(e) => setLastnameOwner(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Número de Teléfono:</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          id="birthDateOwner"
          value={birthDateOwner}
          onChange={(e) => setBirthDateOwner(e.target.value)}
        />
      </div>


    </div>
  );
};

export default OwnerInfo;
