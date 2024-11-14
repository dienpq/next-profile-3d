import axios from 'axios';

import { ENVIRONMENTS } from './environment';

const api = axios.create({
  baseURL: ENVIRONMENTS.API_URL,
});

export default api;
