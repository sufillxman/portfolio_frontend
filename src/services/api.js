import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProjectsApi = async () => {
  const response = await api.get('/projects/');
  return response.data;
};

export const fetchResumeApi = async () => {
  const response = await api.get('/resume/');
  return response.data;
};

export const submitContactApi = async (payload) => {
  const response = await api.post('/contact/', payload);
  return response.data;
};
