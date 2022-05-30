import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    config.headers = { ...config.headers, Authorization: `Bearer ${localStorage.token}` };
    config.baseURL = 'https://final-task-rsshool.herokuapp.com';
    return config;
  },
  function (error) {
    throw new Error(`${error.message}, status: ${error.status}`);
  }
);
export default instance;
