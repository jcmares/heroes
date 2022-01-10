import axios from 'axios';

const baseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/'; 

export const Endpoints = {
  all: baseUrl + 'all.json',
  hero: baseUrl + 'id',
};

export const AxiosService = axios.create({
  timeout: 10000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});
