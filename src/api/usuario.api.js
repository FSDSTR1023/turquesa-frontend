import axios from './axios.js';

export const login = (user) => axios.get('/users/login', {params: {email:user.email, contraseña:user.contraseña}});
export const registro = (user) => axios.get('/users/register', {params: {email:user.email, contraseña:user.contraseña}});