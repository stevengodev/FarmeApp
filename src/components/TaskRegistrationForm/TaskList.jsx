import React, { useState, useEffect } from 'react';
import dataTareas from '../../data/tareas.json'

console.log(dataTareas.tareas)

const tareasArray = dataTareas.tareas
console.log(tareasArray)

const TaskList = () => {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        // Simula una carga de datos
        setTareas(dataTareas.tareas);
      }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th >ID</th>
                    <th >Titulo</th>
                    <th >Descripcion</th>
                    <th >Fecha vencimiento</th>
                    <th >Estado</th>
                    <th >Empleado</th>
                    <th >Acciones</th>
                </tr>
            </thead>
            <tbody>
            {tareas.map(tarea => (
          <tr key={tarea.id}>
            <td>{tarea.id}</td>
            <td>{tarea.titulo}</td>
            <td>{tarea.descripcion}</td>
            <td>{tarea.fecha_vencimiento}</td>            
            <td>{tarea.estado}</td>
            <td>{tarea.empleado}</td>
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

export default TaskList;