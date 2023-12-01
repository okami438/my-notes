import axios from "axios";


const httpRequest = axios.create({
    // baseURL: import.meta.env.VITE_FRONTEND_API_URL_NEW_DISK,
    timeout: 10 * 60 * 1000,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        // "Access-Control-Allow-Origin": 'https://localhost:8080/',
        // 'Access-Control-Allow-Credentials': true,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
        'Access-Control-Allow-Headers': 'access-control-allow-headers,Access-Control-Allow-Origin,access-control-allow-methods,access-control-expose-headers,cache-control,Authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,X-Real-Ip,X-Api-Key,X-Jwt-Token,Accept',
        'Access-Control-Expose-Headers': 'access-control-allow-headers,Access-Control-Allow-Origin,access-control-allow-methods,access-control-expose-headers,cache-control,Authorization,DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,X-Real-Ip,X-Api-Key,X-Jwt-Token,Accept',
    },
    transformRequest: [(data) => JSON.stringify(data)],
});




export default {httpRequest}