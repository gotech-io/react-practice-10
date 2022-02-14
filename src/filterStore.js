import { makeAutoObservable } from 'mobx';

class FilterStore {
  rootStore;
  showCompleted = true;

  constructor(rootStore) {
    // Notice that makeAutoObservable does not autobind by default, so destructuring will not work
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  showCompletedChanged(showCompleted) {
    this.showCompleted = showCompleted;
  }
}

export default FilterStore;
