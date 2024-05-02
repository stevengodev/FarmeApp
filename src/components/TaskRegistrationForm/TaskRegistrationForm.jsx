import React, { useState } from 'react';

const TaskRegistrationForm = () => {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <textarea
                    className="form-control"
                    id="taskDescription"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Estado</label>
                <input
                    type="text"
                    className="form-control"
                    id="taskStatus"
                    value={taskStatus}
                    onChange={(e) => setTaskStatus(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <input
                    type="hidden"
                    className="form-control"
                    id="isDeleted"
                    readOnly
                    value="false"
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="reset" className="btn btn-secondary">Cancelar</button>

        </form>
    )
}

export default TaskRegistrationForm;