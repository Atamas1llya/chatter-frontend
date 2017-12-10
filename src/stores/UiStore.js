import { observable } from 'mobx';

class UiStore {
  @observable loading = true;
}

export default window.UiStore = new UiStore();
