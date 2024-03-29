import axios from './axios.js';

export const login = (user) => axios.get('/users/login', {params: {email:user.email, contraseña:user.contraseña}});
export const registro = (user) => axios.post('/users/register', {email:user.email, contraseña:user.contraseña});
export const logout = () => axios.post('/users/logout');
export const checkUser = () => axios.post('/users/userAuth');