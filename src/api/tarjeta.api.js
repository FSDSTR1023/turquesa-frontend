// api/tarjeta.api.js


import axios from './axios.js';

// Fetch tarjetas for display purposes (might not be user-specific)
export const getTarjetas = () => axios.get('/tarjeta');

// Fetch all tarjetas (general purpose, includes all tarjetas regardless of user association)
export const getAllTarjetas = () => axios.get('/tarjeta/all');

// Fetch a single tarjeta by ID
export const getTarjeta = (id) => axios.get('/tarjeta/' + id);

// Fetch tarjetas for a specific user by their userID
export const getTarjetasUsuario = (userId) => axios.post('/tarjeta/usuario/all', {user:userId});

export const generarTarjetaParaUsuario = (tarjeta, usuarioId) => axios.post(`/tarjeta/usuario/crear`, {tarjeta:tarjeta, usuario:usuarioId});

export const updateTarjeta = (tarjetaNueva) => axios.put('/tarjeta', null, {params: {tarjeta:tarjetaNueva}});

/**
 * Crea una nueva tarjeta en el backend.
 * @param {Object} tarjetaData - Los datos de la tarjeta a crear.
 * @returns {Promise} - La promesa que resulta de la petición POST.
 */
export const crearTarjeta = (tarjetaData) => {
    return axios.post('/tarjeta', tarjetaData)
        .then(response => response.data)
        .catch(error => {
            console.error('Error al crear la tarjeta:', error);
            throw error; 
        }); 
};
