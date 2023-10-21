import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    Alert.alert('Error', 'Something went wrong');
    return Promise.reject(error);
  },
);

export default api;
