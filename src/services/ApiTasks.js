import axios from 'axios';

const API_URL = 'https://backenfarme-production.up.railway.app';

const TaskService = {
  // Obtener todas las tareas
  getAllTasks: async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  },

  // Obtener una tarea por su ID
  getTaskById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching task by ID:', error);
      throw error;
    }
  },

  // Agregar una nueva tarea
  addTask: async (taskData) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, taskData);
      return response.data;
    } catch (error) {
      console.error('Error adding task:', error);
      throw error;
    }
  },

  // Actualizar una tarea
  updateTask: async (id, taskData) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${id}`, taskData);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  },

  // Eliminar una tarea
  deleteTask: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  },

  // Obtener tareas por ID de personal
  getTasksByStaffId: async (staffId) => {
    try {
      const response = await axios.get(`${API_URL}/tasks/staff/${staffId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tasks by staff ID:', error);
      throw error;
    }
  }
};

export default TaskService;
