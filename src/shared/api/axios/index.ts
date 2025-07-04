import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const axiosInstance = axios.create({
  timeout: 10000,
});
