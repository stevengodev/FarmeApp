import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import vaca1 from '../../assets/img/vaca1.jpg';

const FarmsList = () => {
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backenfarme-production.up.railway.app/farms');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        setFarms(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4 text-center">
        <p>Error al cargar las granjas: {error.message}</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        {farms.map((farm) => (
          <Col key={farm.Id} sm={12} md={6} lg={4} className="mb-4">
            <div className="anuncio">
              <div className="contenido-anuncio">
                <img src={vaca1} height={300} alt="imagen de la granja"></img>
                <h3>{farm.Name}</h3>
                <p><strong>Ubicación:</strong> {farm.Location}</p>
                <p><strong>Teléfono:</strong> {farm.PhoneNumber || 'No disponible'}</p>
                <p><strong>Propietario:</strong> {farm.OwnerName} {farm.OwnerLastname}</p>
                <p><strong>Fecha de Nacimiento del Propietario:</strong> {farm.OwnerBirthDate || 'No disponible'}</p>
                <p><strong>ID de Usuario:</strong> {farm.UserId || 'No disponible'}</p>
                <p><strong>ID del Propietario:</strong> {farm.OwnerId || 'No disponible'}</p>
                <a href="#" className="botones boton-amarillo d-block">Ver más</a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FarmsList;
