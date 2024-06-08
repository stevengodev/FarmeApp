import React, { useState, useEffect } from 'react';
import AccessibilityButton from '../../components/Accessibility/AccessibilityButton';
import NavbarGlobal from '../../components/Navbar/NavBarGlobal';
import { fetchAllFarms } from '../../services/ApiFarms'; // Ajusta la ruta según la ubicación de tu archivo api.js

function AllFarms() {

    const [farms, setFarms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedFarms = await fetchAllFarms();
                setFarms(fetchedFarms);
            } catch (error) {
                console.error('Error fetching farms:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <NavbarGlobal />

            <div>
      <h1>Lista de Fincas</h1>
      <div className="row">
        {farms.map((farm) => (
          <div className="col-md-4 mb-4" key={farm.Id}>
            <div className="card">
              <div className="card-body">
                
                <h3 className="card-title">{farm.Name}</h3>

                <p className="card-text"><strong>Ubicación:</strong> {farm.Location}</p>
                <p className="card-text"><strong>Teléfono:</strong> {farm.PhoneNumber}</p>
                <p className="card-text"><strong>Propietario:</strong> {farm.OwnerName} {farm.OwnerLastname}</p>
                <p className="card-text"><strong>Fecha de Nacimiento del Propietario:</strong> {farm.OwnerBirthDate}</p>
                <p className="card-text"><strong>ID del Usuario:</strong> {farm.UserId}</p>
                <p className="card-text"><strong>ID del Propietario:</strong> {farm.OwnerId}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

            <AccessibilityButton />
        </>
    );
}

export default AllFarms;