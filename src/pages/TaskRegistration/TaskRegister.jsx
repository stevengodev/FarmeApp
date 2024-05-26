import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const TaskRegister = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        deadline: '',
        employee: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos de la tarea a tu backend o realizar alguna acción con ellos
        console.log(task);
        // También puedes reiniciar el estado del formulario después de enviar los datos si es necesario
        setTask({
            title: '',
            description: '',
            deadline: '',
            employee: ''
        });
    };

    return (
        <div>
            <h1>Registro de Tareas</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Título de la tarea"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Descripción de la tarea"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formDeadline">
                    <Form.Label>Fecha de Vencimiento</Form.Label>
                    <Form.Control
                        type="date"
                        name="deadline"
                        value={task.deadline}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formEmployee">
                    <Form.Label>Empleado Asignado</Form.Label>
                    <Form.Control
                        as="select"
                        name="employee"
                        value={task.employee}
                        onChange={handleChange}
                    >
                        <option value="">Seleccionar empleado</option>
                        <option value="Juan Pérez">Juan Pérez</option>
                        <option value="Ana López">Ana López</option>
                        <option value="Carlos Gómez">Carlos Gómez</option>
                        {/* Agrega más opciones según tus empleados */}
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrar Tarea
                </Button>
            </Form>
        </div>
    );
};

export default TaskRegister;
