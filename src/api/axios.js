import axios from 'axios';
// const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
    // baseURL: baseURL,
    baseURL:"http://localhost:3000",
    withCredentials:true,
});

export default instance;