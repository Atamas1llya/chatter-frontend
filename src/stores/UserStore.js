import { observable, action } from 'mobx';
import api from '../utils/api';

class UserStore {
  @observable profile = JSON.parse(localStorage.getItem('user_profile'));
  @observable token = localStorage.getItem('user_token');

  @action login = async (credentials) => {
    const res = await api.post('/login', {
      ...credentials,
      mode: 'inline',
    });

    this.storeCredentials(res.token, res.profile);

    return res;
  }

  @action register = async (credentials) => {
    const res = await api.post('/register', {
      ...credentials,
      mode: 'inline',
    });

    this.storeCredentials(res.token, res.profile);

    return res;
  }

  @action storeCredentials = (token, profile) => {
    if (token) {
      localStorage.setItem('user_token', token);
      this.token = token;
    };
    if (profile) {
      localStorage.setItem('user_profile', JSON.stringify(profile));
      this.profile = profile;
    };
  }
}

export default window.UserStore = new UserStore();
