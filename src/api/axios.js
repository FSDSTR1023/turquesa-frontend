import axios from 'axios';


const instance = axios.create({
    // baseURL: baseURL,
    baseURL:import.meta.env.VITE_INVITO_BACKEND_URL,
    withCredentials:true,
});

export default instance;
 
