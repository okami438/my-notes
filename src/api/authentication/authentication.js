import http from '@/api/http/http';

const getAuthenticationCheckUser = () => http.httpRequest.get('auth');
const getAuthenticationUser = (data) => http.httpRequest.post('auth', data);
const getAuthenticationLogoutUser = () => http.httpRequest.delete('auth');

export default {
    getAuthenticationUser,
    getAuthenticationCheckUser,
    getAuthenticationLogoutUser
};