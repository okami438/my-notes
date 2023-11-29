import axios from "axios";
import qs from "qs";


const httpRequest = axios.create({
    // withCredentials: true,
    paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'}),
    baseURL: import.meta.env.VITE_FRONTEND_API_URL_NEW_DISK,
    timeout: 60 * 1000,
    transformRequest: [(data) => {
        return JSON.stringify(data)
    }],
});

export default {httpRequest}