import axios from 'axios';
const Api = axios.create({ baseURL: `http://${process.env.REACT_APP_BASE_API}` });
export default Api;
