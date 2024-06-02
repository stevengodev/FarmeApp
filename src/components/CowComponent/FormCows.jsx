import React, { useState, useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FormCows = () => {
  const navigate = useNavigate();
  const [cows, setCows] = useState([]);
  const [newCow, setNewCow] = useState({
    Name: '',
    Photo: '',
    DateBirth: '',
    Farm_Id: '',
    IsDeleted: false,
    Breed_Id: '',
    Description: ''
  });

  // Lista de opciones para el campo "Breed"
  const breedOptions = [
    { value: '1', label: 'Holstein' },
    { value: '2', label: 'Jersey' },
    { value: '3', label: 'Angus' },
    // Agrega más opciones según tus necesidades
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCow(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddCow = () => {
    setCows(prevCows => [...prevCows, newCow]);
    setNewCow({
      Name: '',
      Photo: '',
      DateBirth: '',
      Farm_Id: '',
      IsDeleted: false,
      Breed_Id: '',
      Description: ''
    });
  };

  const handleDeleteCow = (index) => {
    setCows(prevCows => prevCows.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Registro de Vacas</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={newCow.Name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBreed">
          <Form.Label>Raza</Form.Label>
          <Form.Select
            name="Breed_Id"
            value={newCow.Breed_Id}
            onChange={handleChange}
          >
            <option value="">Seleccionar Raza</option>
            {breedOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formPhoto">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="text"
            name="Photo"
            value={newCow.Photo}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDateBirth">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            name="DateBirth"
            value={newCow.DateBirth}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formFarmId">
          <Form.Label>ID de Granja</Form.Label>
          <Form.Control
            type="text"
            name="Farm_Id"
            value={newCow.Farm_Id}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="Description"
            value={newCow.Description}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary"  type='submit' onClick={handleAddCow}>
          Agregar Vaca
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Foto</th>
            <th>Fecha de Nacimiento</th>
            <th>ID de Granja</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cows.map((cow, index) => (
            <tr key={index}>
              <td>{cow.Name}</td>
              <td>{cow.Breed_Id}</td>
              <td>{cow.Photo}</td>
              <td>{cow.DateBirth}</td>
              <td>{cow.Farm_Id}</td>
              <td>{cow.Description}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteCow(index)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FormCows;
