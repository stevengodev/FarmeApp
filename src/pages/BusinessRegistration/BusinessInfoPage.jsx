import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFarmById } from '../../services/ApiFarms.js'; // Ajusta la ruta según tu estructura de proyecto
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar.jsx';
const BusinessInfoListData = () => {
  const [farm, setFarm] = useState(null);
  const [error, setError] = useState(null); // Añadir estado para manejar errores
  const navigate = useNavigate();
  const { userId } = useParams(); // Suponiendo que la ruta es `/businessInfo-list/:id`

  useEffect(() => {
    const getFarmData = async () => {
      try {
        console.log(`Fetching data for farm with ID: ${userId}`);
        const data = await fetchFarmById(userId); // Usa el helper para obtener los datos
        console.log('Fetched farm data:', data); // Verifica los datos recibidos
        if (Array.isArray(data) && data.length > 0) {
          console.log('Setting farm data:', data[0]);
          setFarm(data[0]);
        } else {
          console.error('No farm data found for the provided ID:', userId);
          navigate(`/business-registration/${userId}`); // Redirige al usuario a la página con userId en la ruta
        }
      } catch (error) {
        console.error('Error fetching farm data:', error);
        setError('Error fetching farm data.'); // Set error message
      }
    };

    getFarmData();
  }, [userId]);

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };

  if (error) {
    return <div>{error}</div>; // Muestra el mensaje de error si lo hay
  }

  if (!farm) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BusinessBar/>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card">
              <div className="card-body">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th>Nombre:</th>
                      <td>{farm.Name}</td>
                    </tr>
                    <tr>
                      <th>Ubicación:</th>
                      <td>{farm.Location}</td>
                    </tr>
                   
                    <tr>
                      <th>Propietario:</th>
                      <td>{`${farm.OwnerName} ${farm.OwnerLastname}`}</td>
                    </tr>
                    <tr>
                      <th>Teléfono:</th>
                      <td>{farm.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <th>Fecha de Nacimiento:</th>
                      <td>{farm.OwenerBirthDate}</td> {/* Asegúrate de corregir esto en la base de datos */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoListData;
