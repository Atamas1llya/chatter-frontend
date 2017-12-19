import api from '../../../utils/api';

export const handleAuthRedirect = function (token) {
  return this.getProfile(token);
};

export const handleLogout = function () {
  this.token = null;
  this.profile = null;

  localStorage.removeItem('user_token');
  localStorage.removeItem('user_profile');
}
