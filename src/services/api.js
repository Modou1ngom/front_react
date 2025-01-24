import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL de l'API Fastify
});

export default api;
