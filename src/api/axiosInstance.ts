import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    config.headers = { ...config.headers, Authorization: `Bearer ${localStorage.token}` };
    config.baseURL = 'https://rsschool-final-task.herokuapp.com';
    return config;
  },
  function (error) {
    // Сделайте что-нибудь с ошибкой запроса
    return Promise.reject(error);
  }
);
export default instance;
