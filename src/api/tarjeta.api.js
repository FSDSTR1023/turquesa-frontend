import axios from './axios.js';

export const getTarjetas = () => axios.get('/tarjeta');
export const getTarjeta = (id) => axios.get('/tarjeta/'+id);
export const obtenerTarjetas = async () => {
    try {
        const response = await axios.get('/tarjeta');
        return response.data;
    } catch (error) {
        console.error('Error al obtener las tarjetas:', error);
        throw error;
    }
};