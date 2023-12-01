import http from '@/api/http/http';

const getNotes = () => http.httpRequest.get('notes');
const postNotes = (data) => http.httpRequest.post('notes', data)
const deleteNotes = (id) => http.httpRequest.delete(`notes/${id}`);

export default {
    getNotes,
    postNotes,
    deleteNotes
};