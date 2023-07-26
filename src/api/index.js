import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3009/api/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export { api };
