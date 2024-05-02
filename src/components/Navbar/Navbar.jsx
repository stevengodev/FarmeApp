// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Farme</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              {/* Agrega más elementos de lista para más enlaces */}

              <li className="nav-item">
                <Link className="nav-link" to="/business-registration">Registro de negocio</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/staff-registration">Registro de personal</Link>
              </li>

              
              <li className="nav-item">
                <Link className="nav-link" to="/task-registration">Registro de tareas</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
