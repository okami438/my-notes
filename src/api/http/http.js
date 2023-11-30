import axios from "axios";

const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_FRONTEND_API_URL_NEW_DISK,
    timeout: 10 * 60 * 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [(data) => JSON.stringify(data)],
});


export default {httpRequest}