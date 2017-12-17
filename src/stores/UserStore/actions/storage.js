export const storeCredentials = function (token, profile) {
  if (token) {
    localStorage.setItem('user_token', token);
    this.token = token;
  }
  if (profile) {
    localStorage.setItem('user_profile', JSON.stringify(profile));
    this.profile = profile;
  }
};
