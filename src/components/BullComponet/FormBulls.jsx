import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FormBulls = () => {
  const navigate = useNavigate();
  const [cows, setCows] = useState([]);
  const [newCow, setNewCow] = useState({
    Name: '',
    BirthDate: '',
    Farm_Id: '',
    Breed_Id: '',
    IsDeted: ''
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
      BirthDate: '',
      Farm_Id: '',
      Breed_Id: '',
      IsDeted: ''
    });
  };

  const handleDeleteCow = (index) => {
    setCows(prevCows => prevCows.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Registro de Toros</h1>
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
        <Form.Group controlId="formBirthDate">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            name="BirthDate"
            value={newCow.BirthDate}
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
        <Form.Group controlId="formIsDeted">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            name="IsDeted"
            value={newCow.IsDeted}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type='submit'  onClick={handleAddCow}>
          Agregar toro
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Fecha de Nacimiento</th>
            <th>ID de Granja</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cows.map((cow, index) => (
            <tr key={index}>
              <td>{cow.Name}</td>
              <td>{cow.Breed_Id}</td>
              <td>{cow.BirthDate}</td>
              <td>{cow.Farm_Id}</td>
              <td>{cow.IsDeted}</td>
              <td>
                <Button variant="primary">
                  Editar
                </Button>
              </td>

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

export default FormBulls;
