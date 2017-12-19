import api from '../../../utils/api';


export const login = async function login(credentials) {
  const res = await api.post('/login', {
    ...credentials,
    mode: 'inline',
  });

  this.storeCredentials(res.token, res.profile);

  return res;
};


export const register = async function register(credentials) {
  const res = await api.post('/register', {
    ...credentials,
    mode: 'inline',
  });

  this.storeCredentials(res.token, res.profile);

  return res;
};
