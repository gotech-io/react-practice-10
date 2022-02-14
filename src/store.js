import TodoStore from './todoStore';
import FilterStore from './filterStore';

class RootStore {
  constructor() {
    this.todoStore = new TodoStore(this);
    this.filterStore = new FilterStore(this);
  }
}

export default RootStore;
