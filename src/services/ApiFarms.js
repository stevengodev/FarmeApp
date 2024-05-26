import axios from 'axios';

const API_URL = 'https://backenfarme-production.up.railway.app';

export const fetchFarmById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/farms/${id}`);
    console.log('API response:', response.data); // Log para verificar la respuesta de la API
    return response.data;
  } catch (error) {
    console.error('Error fetching farm data:', error);
    throw error;
  }
};

export const createFarm = async (farmData) => {
    try {
      const response = await axios.post(`${API_URL}/farms`, farmData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

// Puedes agregar más funciones para otras solicitudes de API si es necesario
