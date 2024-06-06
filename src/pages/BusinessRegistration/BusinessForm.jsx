import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createFarm } from '../../services/ApiFarms.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const FarmForm = () => {
  const { userId } = useParams(); // Obtén el ID de usuario de la URL
  const [formData, setFormData] = useState({
    Id: userId, // Usa el ID de usuario como ID de la granja
    Name: '',
    Location: '',
    PhoneNumber: '',
    OwnerName: '',
    OwnerLastname: '',
    OwnerId: '',
    OwenerBirthDate: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Imprimir el objeto formData
    try {
      await createFarm(formData);
      navigate(`/businessInfo/${userId}`); // Redirigir a la información del negocio
    } catch (error) {
      console.error('Error creating farm:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          id="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Location" className="form-label">Ubicación:</label>
        <input
          type="text"
          className="form-control"
          id="Location"
          name="Location"
          value={formData.Location}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="PhoneNumber" className="form-label">Teléfono:</label>
        <input
          type="text"
          className="form-control"
          id="PhoneNumber"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="OwnerName" className="form-label">Nombre del Propietario:</label>
        <input
          type="text"
          className="form-control"
          id="OwnerName"
          name="OwnerName"
          value={formData.OwnerName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="OwnerLastname" className="form-label">Apellido del Propietario:</label>
        <input
          type="text"
          className="form-control"
          id="OwnerLastname"
          name="OwnerLastname"
          value={formData.OwnerLastname}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="OwnerId" className="form-label">ID del Propietario:</label>
        <input
          type="text"
          className="form-control"
          id="OwnerId"
          name="OwnerId"
          value={formData.OwnerId}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="OwnerBirthDate" className="form-label">Fecha de Nacimiento del Propietario:</label>
        <input
          type="date"
          className="form-control"
          id="OwnerBirthDate"
          name="OwnerBirthDate"
          value={formData.OwenerBirthDate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Crear Granja</button>
      <button type="reset" className="btn btn-secondary">Cancelar</button>

    </form>
  );
};

export default FarmForm;
