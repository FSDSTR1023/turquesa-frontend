// src/api/asisten.api.js

import axios from './axios'; // Assuming axios.js configures the base URL and other settings

// Function to get all asistentes
export const getAsistentes = () => axios.get('/asistentes');

// Function to create a new asistente
export const crearAsistente = (asistente) => axios.post('/asistentes/create', asistente);

export const getAsistente = (asistenteId) => axios.get('/asistentes/one', {params:{id:asistenteId}});

export const updateAsistente = (asistente) => axios.put("/asistentes", null, {params:{nuevoAsistente:asistente}});
