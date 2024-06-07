import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFarmsByUserId } from '../../services/ApiFarms';
import StaffService from '../../services/ApiStaff';

const StaffList = () => {
  const { userId } = useParams(); // Assuming the URL contains the userId parameter
  const [farms, setFarms] = useState([]);
  const [selectedFarmId, setSelectedFarmId] = useState(null);
  const [staff, setStaff] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStaff, setFilteredStaff] = useState([]);
  const [staffForm, setStaffForm] = useState({
    Name: '',
    BirthDate: '',
    IsDeleted: 0,
    Username: '',
    Password: '',
    IdCardNumber: '',
    Id_farm: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [currentStaffId, setCurrentStaffId] = useState(null);

  // Fetch farms associated with the userId
  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const farmsData = await fetchFarmsByUserId(userId);
        setFarms(farmsData);
        if (farmsData.length > 0) {
          setSelectedFarmId(farmsData[0].Id); // Default to first farm
        }
      } catch (error) {
        console.error('Error fetching farms:', error);
      }
    };

    if (userId) {
      fetchFarms();
    }
  }, [userId]);

  // Fetch staff associated with the selected farm
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        if (selectedFarmId) {
          const staffData = await StaffService.getStaffByFarmId(selectedFarmId);
          setStaff(staffData);
        }
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchStaff();
  }, [selectedFarmId]);

  useEffect(() => {
    const filtered = staff.filter(staffMember =>
      staffMember.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStaff(filtered);
  }, [searchTerm, staff]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStaffForm({ ...staffForm, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editMode) {
        await StaffService.updateStaff(currentStaffId, { ...staffForm, Id_farm: selectedFarmId });
      } else {
        await StaffService.addStaff({ ...staffForm, Id_farm: selectedFarmId });
      }
      setStaffForm({
        Name: '',
        BirthDate: '',
        IsDeleted: 0,
        Username: '',
        Password: '',
        IdCardNumber: '',
        Id_farm: selectedFarmId
      });
      setEditMode(false);
      const staffData = await StaffService.getStaffByFarmId(selectedFarmId);
      setStaff(staffData);
    } catch (error) {
      console.error('Error saving staff:', error);
    }
  };

  const handleEditClick = (staffMember) => {
    setStaffForm(staffMember);
    setCurrentStaffId(staffMember.Id);
    setEditMode(true);
  };

  const handleDeleteClick = async (staffId) => {
    try {
      await StaffService.deleteStaff(staffId);
      const staffData = await StaffService.getStaffByFarmId(selectedFarmId);
      setStaff(staffData);
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  const handleFarmChange = (event) => {
    setSelectedFarmId(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Administrador de Staff</h1>

      <div className="form-group mb-3">
        <label htmlFor="farmSelect">Seleccionar Finca</label>
        <select 
          id="farmSelect" 
          className="form-control" 
          value={selectedFarmId} 
          onChange={handleFarmChange}
        >
          {farms.map((farm) => (
            <option key={farm.Id} value={farm.Id}>
              {farm.Name}
            </option>
          ))}
        </select>
      </div>

     
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="Name"
            placeholder="Nombre Completo"
            value={staffForm.Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            name="BirthDate"
            placeholder="Fecha de nacimiento"
            value={staffForm.BirthDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="Username"
            placeholder="Nombre de Usuario"
            value={staffForm.Username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="Password" // Cambia "password" por "Password"
          placeholder="Contraseña"
          value={staffForm.Password}
          onChange={handleInputChange}
          required
        />

        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="IdCardNumber"
            placeholder="Número de Cedula"
            value={staffForm.IdCardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editMode ? 'Update Staff' : 'Add Staff'}
        </button>
      </form>
      <div className="form-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Por nombre "
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha de Nacimiento</th>
            <th>Nombre de Usuario</th>
            <th>Numero de Cedula</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staffMember) => (
            <tr key={staffMember.Id}>
              <td>{staffMember.Name}</td>
              <td>{staffMember.BirthDate}</td>
              <td>{staffMember.Username}</td>
              <td>{staffMember.IdCardNumber}</td>
              <td>
                <button 
                  className="btn btn-secondary btn-sm mr-2" 
                  onClick={() => handleEditClick(staffMember)}
                >
                  Cambiar contraseña
                </button>
                <button 
                  className="btn btn-danger btn-sm" 
                  onClick={() => handleDeleteClick(staffMember.Id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
