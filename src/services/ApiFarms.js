import axios from 'axios';

const API_URL = 'https://backenfarme-production.up.railway.app';

// Function to fetch a farm by its ID
export const fetchFarmById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/farms/${id}`);
    console.log('API response:', response.data); // Log to verify the API response
    return response.data;
  } catch (error) {
    console.error('Error fetching farm data:', error);
    throw error; // Re-throw the error after logging it
  }
};

// Function to create a new farm
export const createFarm = async (farmData) => {
  try {
    const response = await axios.post(`${API_URL}/farms`, farmData);
    console.log('API response:', response.data); // Log to verify the API response
    return response.data;
  } catch (error) {
    console.error('Error creating farm:', error);
    throw error; // Re-throw the error after logging it
  }
};

// Function to update an existing farm by its ID
export const updateFarm = async (id, farmData) => {
  try {
    const response = await axios.put(`${API_URL}/farms/${id}`, farmData);
    console.log('API response:', response.data); // Log to verify the API response
    return response.data;
  } catch (error) {
    console.error('Error updating farm:', error);
    throw error; // Re-throw the error after logging it
  }
};

// Function to delete a farm by its ID
export const deleteFarm = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/farms/${id}`);
    console.log('API response:', response.data); // Log to verify the API response
    return response.data;
  } catch (error) {
    console.error('Error deleting farm:', error);
    throw error; // Re-throw the error after logging it
  }
};

// Function to fetch all farms
export const fetchAllFarms = async () => {
  try {
    const response = await axios.get(`${API_URL}/farms`);
    console.log('API response:', response.data); // Log to verify the API response
    return response.data;
  } catch (error) {
    console.error('Error fetching farms:', error);
    throw error; // Re-throw the error after logging it
  }
};

// Function to fetch farms by user ID
export const fetchFarmsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/farms/user/${userId}`);
    console.log('API response:', response.data); // Log to verify the API response
    return response.data;
  } catch (error) {
    console.error('Error fetching farms for user:', error);
    throw error; // Re-throw the error after logging it
  }
};
