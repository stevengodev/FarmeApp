import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div>
          <button className="btn btn-outline-primary" style={{fontSize:'16px', marginRight: '10px'}}  onClick={() => handleNavigate('/employee-list')}>Empleados</button>
          <button className="btn btn-outline-primary" style={{fontSize:'16px', marginRight: '10px'}} onClick={() => handleNavigate('/task-list')}>Tareas</button>
          <button className="btn btn-outline-primary" style={{fontSize:'16px', marginRight: '10px'}} onClick={() => handleNavigate('/cows')}>Vacas</button>
          <button className="btn btn-outline-primary" style={{fontSize:'16px', marginRight: '10px'}} onClick={() => handleNavigate('/bulls')}>Toros</button>
          <button className="btn btn-outline-primary" style={{fontSize:'16px', marginRight: '10px'}} onClick={() => handleNavigate('/cowBabies')}>Terneros</button>
        </div>
      </div>

    </nav>
  );
};

export default BusinessBar;
