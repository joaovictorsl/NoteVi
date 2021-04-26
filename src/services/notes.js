import Api from './api';

const NotesService = {
  userNotes: () => Api.get('/notes', { headers: { 'x-access-token': localStorage.getItem('token') } }),

}

export default NotesService;