import { observable, action, computed } from 'mobx';
import { colorSchemas } from './config';

class UiStore {
  @observable loading = true;
  @observable theme = 'light';
  @observable colorSchemas = colorSchemas;

  @computed get colorScheme() {
    return this.colorSchemas[this.theme];
  }

  @action switchTheme = () => {
    if (this.theme === 'light') {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }

    this.applyColorScheme();
  }

  applyColorScheme = () => {
    const { colorScheme } = this;

    document.documentElement.style.setProperty('--theme-black', colorScheme.background);
    document.documentElement.style.setProperty('--theme-white', colorScheme.color);
  }
}

export default window.UiStore = new UiStore();
