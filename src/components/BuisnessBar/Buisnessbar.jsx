import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const BusinessBar = () => {

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userId'));
    if (storedUser) {
        setUserId(storedUser.userId);
    }
}, []);

  // const userId = "V4DzKkpyyuMpvEr4tYiQ1tCnynJ3"; // Hardcoded userId

  // // Para recuperar el userId desde localStorage
  // const storedUser = JSON.parse(localStorage.getItem('userId'));
  // const userId = storedUser ? storedUser.userId : 'V4DzKkpyyuMpvEr4tYiQ1tCnynJ3';
  // console.log('Recovered userId:', userId);


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
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate(`/employee-list/${userId}`)}>Empleados</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate(`/task-list/${userId}`)}>Tareas</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate(`/cows/${userId}`)}>Vacas</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate(`/bulls/${userId}`)}>Toros</button>
          <button className="btn btn-outline-primary" style={{ fontSize: '16px', marginRight: '10px' }} onClick={() => handleNavigate(`/cowBabies/${userId}`)}>Terneros</button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessBar;
