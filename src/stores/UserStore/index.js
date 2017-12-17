import { observable, action } from 'mobx';

import * as auth from './actions/auth';
import * as handlers from './actions/handlers';
import * as storage from './actions/storage';

class UserStore {
  @observable profile = JSON.parse(localStorage.getItem('user_profile'));
  @observable token = localStorage.getItem('user_token');

  // api calls
  @action login = auth.login.bind(this);
  @action register = auth.register.bind(this);

  // handlers
  @action handleAuthRedirect = handlers.handleAuthRedirect.bind(this);

  // storage
  @action storeCredentials = storage.storeCredentials.bind(this);
}

export default window.UserStore = new UserStore();
