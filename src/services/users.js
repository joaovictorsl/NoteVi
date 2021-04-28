import Api from './api';

const UserService = {
  register: (params) => Api.post('/users/register', params),
  login: async (params) => {
    const response = await Api.post('users/login', params);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.token);
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
  updateToken: () => {

  },
  delete: async (id) => {
    Api.delete(`/users/delete/${id}`, { headers: { 'x-access-token': localStorage.getItem('token') } })
  },
  updateName: async (params) => {
    Api.put(`/users/edit/name`, params, { headers: { 'x-access-token': localStorage.getItem('token') } });
    let user = JSON.parse(localStorage.getItem('user'))
    user = { ...user, name: params.name }
    localStorage.setItem('user', JSON.stringify(user))
  },
  updateEmail: async (params) => {
    let response = await Api.put(`/users/edit/email`, params, { headers: { 'x-access-token': localStorage.getItem('token') } });
    let user = JSON.parse(localStorage.getItem('user'))
    user = { ...user, email: params.email }
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', response.data.token);
  },
  updatePassword: async (params) => {
    const response = await Api.put(`/users/edit/password`, params, { headers: { 'x-access-token': localStorage.getItem('token') } });
    let user = JSON.parse(localStorage.getItem('user'))
    user = { ...user, password: response.data.user.password }
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export default UserService;