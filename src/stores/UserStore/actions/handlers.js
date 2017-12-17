import api from '../../../utils/api';

export const handleAuthRedirect = async function (token) {
  // TODO: verify user token, get profile and save credentails
  const res = await api.get('/user/profile', token);

  this.storeCredentials(token, res.profile);
};
