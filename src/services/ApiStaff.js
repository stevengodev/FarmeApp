import axios from 'axios';

const API_URL = 'https://backenfarme-production.up.railway.app';

const StaffService = {
  // Get all staff
  getAllStaff: async () => {
    try {
      const response = await axios.get(`${API_URL}/staff`);
      return response.data;
    } catch (error) {
      console.error('Error fetching staff:', error);
      throw error;
    }
  },

  // Get staff by ID
  getStaffById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/staff/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching staff by ID:', error);
      throw error;
    }
  },

  // Add new staff
  addStaff: async (staffData) => {
    try {
      const response = await axios.post(`${API_URL}/staff`, staffData);
      return response.data;
    } catch (error) {
      console.error('Error adding staff:', error);
      throw error;
    }
  },

  // Update staff
  updateStaff: async (id, staffData) => {
    try {
      const response = await axios.put(`${API_URL}/staff/${id}`, staffData);
      return response.data;
    } catch (error) {
      console.error('Error updating staff:', error);
      throw error;
    }
  },

  // Delete staff
  deleteStaff: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/staff/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting staff:', error);
      throw error;
    }
  },

  // Get all staff by farmId
  getStaffByFarmId: async (farmId) => {
    try {
      const response = await axios.get(`${API_URL}/staff/farm/${farmId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching staff by farm ID:', error);
      throw error;
    }
  },
  

  // Staff login

};

export default StaffService;
