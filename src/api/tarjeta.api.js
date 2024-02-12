// api/tarjeta.api.js

import axios from './axios.js';

// Fetch tarjetas for display purposes (might not be user-specific)
export const getTarjetasMuestra = () => axios.get('/tarjeta');

// Fetch all tarjetas (general purpose, includes all tarjetas regardless of user association)
export const getAllTarjetas = () => axios.get('/tarjeta/all');

// Fetch a single tarjeta by ID
export const getTarjeta = (id) => axios.get('/tarjeta/' + id);

// Fetch tarjetas for a specific user by their userID
export const getTarjetasUsuario = (userId) => axios.get(`/tarjeta/usuario/${userId}`);

/* 
getTarjetasMuestra maps to the / route, which could be for fetching tarjetas meant for showcasing or for general display purposes that are not tied to a specific user.
getAllTarjetas corresponds to the /all route, likely intended for administrative purposes or scenarios where you need to retrieve all tarjetas stored in the database, regardless of any user association.
getTarjetasUsuario specifically requests tarjetas associated with a given user ID, aligning with the /usuario/:userId route. This function is key for the feature where logged-in users can view their own tarjetas.
*/