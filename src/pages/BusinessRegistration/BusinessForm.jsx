import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createFarm, fetchFarmsByUserId, deleteFarm } from '../../services/ApiFarms.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomAlert from '../../components/CustomAlert/CustomAlert.jsx';

const FarmForm = () => {
  const { userId } = useParams(); // Get the user ID from the URL

  const [formData, setFormData] = useState({
    Name: '',
    Location: '',
    PhoneNumber: '',
    OwnerName: '',
    OwnerLastname: '',
    OwnerId: '',
    OwnerBirthDate: '' // Ensure the key name is correct
  });

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertVariant, setAlertVariant] = useState('success');

  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFarms = async () => {
      try {
        const fetchedFarms = await fetchFarmsByUserId(userId);
        setFarms(fetchedFarms);
      } catch (error) {
        console.error('Error fetching farms:', error);
        setError('Error fetching farms.');
      } finally {
        setLoading(false);
      }
    };

    loadFarms();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const farmData = { ...formData, UserId: userId }; // Add UserId to the form data
    console.log(farmData); // Print the farmData object
    try {
      await createFarm(farmData);
      const fetchedFarms = await fetchFarmsByUserId(userId); // Refresh the farms list
      setFarms(fetchedFarms);

      // Mostrar la alerta

      setAlertMessage("La granja se ha guardado correctamente");
      setAlertVariant("success");

      // Limpiar los valores de los inputs
      setFormData({
        Name: '',
        Location: '',
        OwnerName: '',
        OwnerLastname: '',
        OwnerId: '',
        OwnerBirthDate: '',
        PhoneNumber: '',
      });

    } catch (error) {
      console.error('Error creating farm:', error);
    }
  };

  const handleDelete = async (farmId) => {
    try {
      await deleteFarm(farmId);
      const fetchedFarms = await fetchFarmsByUserId(userId); // Refresh the farms list
      setFarms(fetchedFarms);
    } catch (error) {
      console.error('Error deleting farm:', error);
    }
  };


  return (
    <>

      <h3>Registrar negocio</h3>

      {alertMessage && (
        <CustomAlert
          message={alertMessage}
          variant={alertVariant}
          onClose={() => setAlertMessage(null)}
        />
      )}

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
            style={{ maxWidth: "590px" }} // Ajusta el máximo ancho según sea necesario
          />
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
        </div>


        <div className="row mb-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <label htmlFor="OwnerBirthDate" className="form-label">Fecha de Nacimiento del Propietario:</label>
            <input
              type="date"
              className="form-control"
              id="OwnerBirthDate"
              name="OwnerBirthDate"
              value={formData.OwnerBirthDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Crear Granja</button>
        <button type="reset" className="btn btn-secondary">Cancelar</button>
      </form>

      <h2 className="mt-5">Fincas Asociadas</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : farms.length === 0 ? (
        <p>No farms found.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ubicación</th>
              <th>Teléfono</th>
              <th>Propietario</th>
              <th>Fecha de Nacimiento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {farms.map(farm => (
              <tr key={farm.Id}>
                <td>{farm.Name}</td>
                <td>{farm.Location}</td>
                <td>{farm.PhoneNumber}</td>
                <td>{`${farm.OwnerName} ${farm.OwnerLastname}`}</td>
                <td>{farm.OwnerBirthDate}</td>
                <td>
                  <button className="btn btn-warning editar" style={{ marginRight: '10px' }} onClick={() => navigate(`/edit-farm/${farm.Id}`)}>Editar</button>
                  <button className="btn btn-danger eliminar" onClick={() => handleDelete(farm.Id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default FarmForm;
