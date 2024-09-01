import axios from "axios";



const API_URL = 'https://skill-test.similater.website/api/v1/';

export const loginUser = async (body: any) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getData = async (token: string | null) => {
  try {
    const response = await axios.get(`${API_URL}/property/list`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};