import Api from './api';

const NotesService = {
  userNotes: () => Api.get('/notes', { headers: { 'x-access-token': localStorage.getItem('token') } }),
  create: () => Api.post('/notes', { 'title': 'New note', 'body': 'New note...' }, { headers: { 'x-access-token': localStorage.getItem('token') } }),
  delete: (id) => Api.delete(`/notes/${id}`, { headers: { 'x-access-token': localStorage.getItem('token') } })
}

export default NotesService;