import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessInfoListData = () => {

  return (
    <div className='container' >
      <div className="row">
        <div className="col-md-4">
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
    </div>

  );
};

export default BusinessInfoListData;
