import React, { useState, useEffect } from 'react';
import dataTareas from '../../data/tareas.json';
import '../../assets/styles/TaskList.css'; // Importamos el archivo de estilos CSS

const TaskList = () => {
    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        // Simulamos una carga de datos
        setTareas(dataTareas.tareas);
    }, []);

    return (
        <div className="note-container"> {/* Contenedor de las notas */}
            {tareas.map(tarea => (
                <div key={tarea.id} className="note">
                    <div className="note-header">
                        <span className="note-title">{tarea.titulo}</span>
                        <button className="btn-close">×</button>
                    </div>
                    <div className="note-body">
                        <p>{tarea.descripcion}</p>
                        <div className="note-meta">
                            <span className="due-date">Fecha de vencimiento: {tarea.fecha_vencimiento}</span>
                            <span className={`status ${tarea.estado}`}>{tarea.estado}</span>
                        </div>
                        <span className="assigned-to">Empleado: {tarea.empleado}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
