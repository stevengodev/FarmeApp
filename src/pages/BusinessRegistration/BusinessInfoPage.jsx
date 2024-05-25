import React from 'react';
import { useNavigate } from 'react-router-dom';

const BusinessInfoListData = () => {
  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="row mb-3">
      <div className="col-md-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2>Información del Negocio</h2>
          <div>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/employee-list')}>Empleados</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/task-list')}>Tareas</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/')}>Ganado</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/')}>Toros</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/products-list')}>Productos</button>
            <button className="btn btn-primary me-2" onClick={() => handleNavigate('/tienda')}>Tienda</button>
            <button className="btn btn-secondary" onClick={() => handleNavigate('/')}>Volver</button>
          </div>
        </div>
      
        <table className="table">
          <tbody>
            <tr>
              <th>Nombre:</th>
              <td>Las Canarias</td>
            </tr>
            <tr>
              <th>Ubicacion:</th>
              <td>Sucre</td>
            </tr>
            <tr>
              <th>Numero de identificacion:</th>
              <td>1111111111</td>
            </tr>
            <tr>
              <th>Nombre:</th>
              <td>Steven David</td>
            </tr>
            <tr>
              <th>Apellido:</th>
              <td>Gomez Foliaco</td>
            </tr>
            <tr>
              <th>Telefono:</th>
              <td>3218128910</td>
            </tr>
            <tr>
              <th>Fecha de nacimiento:</th>
              <td>10/10/1992</td>
            </tr>
            <tr>
              <td colSpan="2" className="text-end">
                <button className="btn btn-primary me-2">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default BusinessInfoListData;
