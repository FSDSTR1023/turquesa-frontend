import axios from 'axios';
// const baseURL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
    // baseURL: baseURL,
    baseURL:"https://turquesa-backend.onrender.com",
    withCredentials:true,
});

export default instance;

// https://api.render.com/deploy/srv-cnfqopv109ks738kb7a0?key=hK3DRevrcXU