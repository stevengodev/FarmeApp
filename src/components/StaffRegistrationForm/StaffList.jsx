import React, { useState, useEffect } from 'react';
import dataStaff from '../../data/empleados.json'

// const tareasArray = dataStaff.tareas
// console.log(tareasArray)

const StaffList = () => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        // Simula una carga de datos
        setEmpleados(dataStaff.empleados);
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Nombres</th>
                    <th >Fecha de nacimiento</th>
                    <th >Fecha de Inicio</th>
                    <th >Username</th>
                    <th >Password</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map(empleado => (
                    <tr key={empleado.id}>
                        <td>{empleado.id}</td>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.fecha_nacimiento}</td>
                        <td>{empleado.fecha_inicio}</td>
                        <td>{empleado.username}</td>
                        <td>{empleado.password}</td>
                        <td colSpan="2" className="text-end">
                <button className="btn btn-primary me-2">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StaffList;