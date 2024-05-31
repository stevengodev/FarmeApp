import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import '../../assets/styles/global.css'

const CowBabiesForm = () => {
  const [matingRecords, setMatingRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    MatingDate: '',
    BirthDate: '',
    Name: '',
    Cows_Id: '',
    Bulls_Id: '',
    Breed_Id: ''
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
    setNewRecord(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddRecord = () => {
    setMatingRecords(prevRecords => [...prevRecords, newRecord]);
    setNewRecord({
      MatingDate: '',
      BirthDate: '',
      Name: '',
      Cows_Id: '',
      Bulls_Id: '',
      Breed_Id: ''
    });
  };

  const handleDeleteRecord = (index) => {
    setMatingRecords(prevRecords => prevRecords.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Registro de Terneros</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={newRecord.Name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBreed">
          <Form.Label>Raza</Form.Label>
          <Form.Select
            name="Breed_Id"
            value={newRecord.Breed_Id}
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
            value={newRecord.BirthDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formMatingDate">
          <Form.Label>Fecha de Emparejamiento</Form.Label>
          <Form.Control
            type="date"
            name="MatingDate"
            value={newRecord.MatingDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formCowsId">
          <Form.Label>ID de Vaca</Form.Label>
          <Form.Control
            type="text"
            name="Cows_Id"
            value={newRecord.Cows_Id}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBullsId">
          <Form.Label>ID de Toro</Form.Label>
          <Form.Control
            type="text"
            name="Bulls_Id"
            value={newRecord.Bulls_Id}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" className='btn-emparejamiento' onClick={handleAddRecord}>
          Agregar Emparejamiento
        </Button>

      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Fecha de Nacimiento</th>
            <th>Fecha de Emparejamiento</th>
            <th>ID de Vaca</th>
            <th>ID de Toro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {matingRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.Name}</td>
              <td>{record.Breed_Id}</td>
              <td>{record.BirthDate}</td>
              <td>{record.MatingDate}</td>
              <td>{record.Cows_Id}</td>
              <td>{record.Bulls_Id}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteRecord(index)}>
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

export default CowBabiesForm;
