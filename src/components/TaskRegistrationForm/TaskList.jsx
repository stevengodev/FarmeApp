import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFarmsByUserId } from '../../services/ApiFarms';
import StaffService from '../../services/ApiStaff';
import TaskService from '../../services/ApiTasks';

const TaskList = () => {
  const { userId } = useParams(); // Assuming the URL contains the userId parameter
  const [farms, setFarms] = useState([]);
  const [selectedFarmId, setSelectedFarmId] = useState(null);
  const [staff, setStaff] = useState([]);
  const [selectedStaffId, setSelectedStaffId] = useState(null); // State to hold the selected staff ID
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [tasks, setTasks] = useState([]); // State to hold the tasks

  // Fetch farms associated with the userId
  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const farmsData = await fetchFarmsByUserId(userId);
        setFarms(farmsData);
        if (farmsData.length > 0) {
          setSelectedFarmId(farmsData[0].Id); // Default to first farm
        }
      } catch (error) {
        console.error('Error fetching farms:', error);
      }
    };

    if (userId) {
      fetchFarms();
    }
  }, [userId]);

  // Fetch staff associated with the selected farm
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        if (selectedFarmId) {
          const staffData = await StaffService.getStaffByFarmId(selectedFarmId);
          setStaff(staffData);
          if (staffData.length > 0) {
            setSelectedStaffId(staffData[0].Id); // Default to first staff
          }
        }
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchStaff();
  }, [selectedFarmId]);

  // Fetch tasks associated with the selected staff
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (selectedStaffId) {
          const tasksData = await TaskService.getTasksByStaffId(selectedStaffId);
          setTasks(tasksData);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [selectedStaffId]);

  // Handle change in farm selection
  const handleFarmChange = (event) => {
    setSelectedFarmId(event.target.value);
  };

  // Handle change in staff selection
  const handleStaffChange = (event) => {
    setSelectedStaffId(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskData = {
      Name: taskName,
      Description: taskDescription,
      Status: taskStatus,
      StaffId: selectedStaffId
    };

    try {
      await TaskService.addTask(taskData);
      alert('Tarea agregada correctamente');
      // Reset form fields
      setTaskName('');
      setTaskDescription('');
      setTaskStatus('');
      setSelectedStaffId(null);
      // Refresh tasks
      if (selectedStaffId) {
        const tasksData = await TaskService.getTasksByStaffId(selectedStaffId);
        setTasks(tasksData);
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error agregando tarea');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Asignar Tarea</h1>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="farmSelect">Seleccionar Finca</label>
              <select
                id="farmSelect"
                className="form-control"
                value={selectedFarmId}
                onChange={handleFarmChange}
              >
                {farms.map((farm) => (
                  <option key={farm.Id} value={farm.Id}>
                    {farm.Name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="staffSelect">Seleccionar Personal</label>
              <select
                id="staffSelect"
                className="form-control"
                value={selectedStaffId}
                onChange={handleStaffChange}
              >
                {staff.map((staffMember) => (
                  <option key={staffMember.Id} value={staffMember.Id}>
                    {staffMember.Name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="container">
  <div className="row">
    <div className="col-md-6 mb-3">
      <div className="form-group">
        <label htmlFor="taskName">Nombre de la Tarea</label>
        <input
          type="text"
          id="taskName"
          className="form-control"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
    </div>
    <div className="col-md-6 mb-3">
      <div className="form-group">
        <label htmlFor="taskStatus">Estado de la Tarea</label>
        <select
          id="taskStatus"
          className="form-control"
          value={taskStatus}
          onChange={(e) => setTaskStatus(e.target.value)}
          required
        >
          <option value="">Seleccionar Estado</option>
          <option value="S">Comenzado</option>
          <option value="P">En Proceso</option>
          <option value="F">Terminado</option>
          <option value="IP">En Problemas</option>
        </select>
      </div>
    </div>
  </div>
</div>

        <div className="form-group mb-3">
          <label htmlFor="taskDescription">Descripción de la Tarea</label>
          <textarea
            id="taskDescription"
            className="form-control"
            rows="3"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          ></textarea>
        </div>



        <button type="submit" className="btn btn-primary">Asignar Tarea</button>
        <button type="reset" className="btn btn-secundary" style={{ background: 'gray' }} >Cancelar</button>

      </form>

      <h2 className="mt-5">Tareas</h2>
      {tasks.length > 0 ? (
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.Id} className="list-group-item">
              <h5>{task.Name}</h5>
              <p>{task.Description}</p>
              <p><strong>Estado:</strong> {task.Status === 'S' ? 'Comenzado' : task.Status === 'P' ? 'En Proceso' : task.Status === 'F' ? 'Terminado' : task.Status === 'IP' ? 'En Problemas' : 'Desconocido'}</p>
              <p><strong>Asignado a:</strong> {task.StaffName}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas asignadas para este empleado.</p>
      )}
    </div>
  );
};

export default TaskList;
