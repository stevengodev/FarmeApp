import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFarmsByUserId } from '../../services/ApiFarms';
import StaffService from '../../services/ApiStaff';
import AccessibilityButton from '../Accessibility/AccessibilityButton';

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
    <>
      <h3 className="mb-4">Registrar nuevo empleado</h3>
      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="mb-3">
        <label htmlFor="farmSelect" className="form-label">Seleccionar Finca</label>
        <select 
          id="farmSelect" 
          className="form-select" 
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
    </div>
    <div className="col-md-6">
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                name="Name"
                placeholder="Steven David"
                value={staffForm.Name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="BirthDate" className="form-label">Fecha de nacimiento</label>
              <input
                type="date"
                className="form-control"
                name="BirthDate"
                value={staffForm.BirthDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">Nombre de Usuario</label>
              <input
                type="text"
                className="form-control"
                name="Username"
                placeholder="Steven"
                value={staffForm.Username}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="Password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="Password"
                placeholder="12345678"
                value={staffForm.Password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="IdCardNumber" className="form-label">Numero de cedula</label>
              <input
                type="text"
                className="form-control"
                name="IdCardNumber"
                placeholder="1102729152"
                value={staffForm.IdCardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3 d-flex align-items-end">
              <button type="submit" className="btn btn-primary me-2">
                {editMode ? 'Actualizar' : 'Agregar'}
              </button>
              <button type="reset" className="btn btn-secondary">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>



          <h4>Empleados</h4>

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
                  className="btn btn-secondary editar btn-sm mr-2" style={{marginRight: '10px'}} 
                  onClick={() => handleEditClick(staffMember)}
                >
                 Editar
                </button>
                <button 
                  className="btn btn-danger btn-sm eliminar"  
                  onClick={() => handleDeleteClick(staffMember.Id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

          <AccessibilityButton/>

      </>
  );
};

export default StaffList;