import http from '@/api/http/http';

const getNotes = () => http.httpRequest.get('api/notes');
const postNotes = (data) => http.httpRequest.post('api/notes', data)
const deleteNotes = (id) => http.httpRequest.delete(`api/notes/${id}`);

export default {
    getNotes,
    postNotes,
    deleteNotes
};