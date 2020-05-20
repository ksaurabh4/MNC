import axios from 'axios';
const api = axios.create({
  baseURL: 'https://kumar-task-manager-api.herokuapp.com',
});

export default api;
