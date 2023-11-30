import http from '@/api/http/http';

const getAuthentication = () => http.httpRequest.get('auth');
const postAuthentication = (data) => http.httpRequest.post('auth', data)
const deleteAuthentication = () => http.httpRequest.delete('auth');

export default {
    postAuthentication,
    getAuthentication,
    deleteAuthentication
};