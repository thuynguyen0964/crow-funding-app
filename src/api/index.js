import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3009/api/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

const apiAuth = axios.create({
  baseURL: 'http://localhost:5001/',
  timeout: 10000,
});

export { apiAuth, api };
