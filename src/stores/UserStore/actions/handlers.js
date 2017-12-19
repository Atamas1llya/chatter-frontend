export const handleAuthRedirect = function handleAuthRedirect(token) {
  return this.getProfile(token);
};

export const handleLogout = function handleLogout() {
  this.token = null;
  this.profile = null;

  localStorage.removeItem('user_token');
  localStorage.removeItem('user_profile');
};
