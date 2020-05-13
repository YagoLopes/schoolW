import axios from 'axios';
import { getToken } from './auth';
export const api = axios.create({
 baseURL: 'http://127.0.0.1:3333',
});
export const apiReset = axios.create({
 baseURL: 'http://127.0.0.1:3333',
});

export const redirect_url = 'http://localhost:3000/page3';

api.postOrPut = (url, id, data) => {
 const method = id ? 'put' : 'post';
 const apiUrl = id ? `${url}/${id}` : url;

 return api[method](apiUrl, data);
};

api.interceptors.request.use(async config => {
 const token = getToken();
 if (token) {
  config.headers.Authorization = `Bearer ${token}`;
 }
 return config;
});
