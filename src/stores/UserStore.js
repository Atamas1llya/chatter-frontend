import { observable, action } from 'mobx';
import api from '../utils/api';

class UserStore {
  @observable profile = localStorage.getItem('user_profile');
  @observable token = localStorage.getItem('user_token');

  @action login = async (credentials) => {
    const res = await api.post('/login', credentials);
    console.log(res);
  }

  @action register = async (credentials) => {

  }
}

export default window.UserStore = new UserStore();
