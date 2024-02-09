import axios from './axios.js';

export const getTarjetas = () => axios.get('/tarjeta');
export const getTarjeta = (id) => axios.get('/tarjeta/'+id);
