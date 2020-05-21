import axios from 'axios';
const api = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://kumar-task-manager-api.herokuapp.com',
});

export default api;
