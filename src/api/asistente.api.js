// src/api/asisten.api.js

import axios from './axios'; // Assuming axios.js configures the base URL and other settings

// Function to get all asistentes
export const getAsistentes = () => axios.get('/asistentes');

// Function to create a new asistente
export const crearAsistente = (asistente) => axios.post('/asistentes/create', asistente);

