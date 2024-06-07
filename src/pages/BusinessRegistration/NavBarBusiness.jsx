import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NavBarBusiness = () => {
  const navigate = useNavigate();
  const { userId } = useParams(); // Get the user ID from URL params

  const handleNavigate = (path) => {
    navigate(path.replace(':id', userId)); // Replace :id with actual user ID
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate('/employee-list/:id')}>Empleados</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate('/task-list')}>Tareas</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate('/cows')}>Vacas</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate('/bulls')}>Toros</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate('/cowBabies')}>Terneros</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBarBusiness;
