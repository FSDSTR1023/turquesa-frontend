import axios from 'axios';

 //const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
    // baseURL: baseURL,
    baseURL:import.meta.env.VITE_INVITO_BACKEND_URL,
    withCredentials:true,
});

export default instance;