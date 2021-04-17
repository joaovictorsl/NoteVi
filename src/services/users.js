import Api from './api';

const UserService = {
  register: (params) => Api.post('/users/register', params),
  login: (params) => Api.post('/users/login', params)
}

export default UserService;