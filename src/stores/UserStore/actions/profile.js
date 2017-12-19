import api from '../../../utils/api';

export const getProfile = async function getProfile(token) {
  const res = await api.get('/user/profile', token || this.token);

  this.storeCredentials(token, res.profile);

  return res;
};
