import http from '@/api/http/http';

const getAuthentication = () => http.httpRequest.get('api/auth');
const postAuthentication = (data) => http.httpRequest.post('api/auth', data)
const deleteAuthentication = () => http.httpRequest.delete('api/auth');

export default {
    postAuthentication,
    getAuthentication,
    deleteAuthentication
};