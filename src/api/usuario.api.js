import axios from './axios.js';

export const login = (user) => axios.get('/users/login', {params: {email:user.email, contraseña:user.contraseña}});