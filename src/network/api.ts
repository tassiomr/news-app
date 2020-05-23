import axios from 'axios';
import endpoints from './endpoints';

const api = axios.create({
  baseURL: endpoints.baseUrl,
});

api.interceptors.response.use(
  (response) => {
    return response.data.results;
  },
  (error) => Promise.reject(error),
);

export default api;
