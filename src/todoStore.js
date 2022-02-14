import { makeAutoObservable, runInAction } from 'mobx';
import api from './api';

class TodoStore {
  rootStore;
  todos = [];

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  async getTodos() {
    const todos = await api.readItems();

    runInAction(() => {
      this.todos.push(...todos);
    });
  }

  async postNewTodo(title) {
    const newTodo = {
      title,
      isCompleted: false,
    };
    const todo = await api.createItem(newTodo);

    runInAction(() => {
      this.todos.push(todo);
    });
  }

  async patchTodo(id, changes) {
    const todo = await api.updateItem(id, { ...changes });

    runInAction(() => {
      const foundTodo = this.todos.filter((todo) => todo.id === id)[0];
      Object.assign(foundTodo, todo);
    });
  }

  async deleteTodo(id) {
    await api.deleteItem(id);

    runInAction(() => {
      const foundIndex = this.todos.findIndex((todo) => todo.id === id);
      this.todos.splice(foundIndex, 1);
    });
  }

  todoById(id) {
    return this.todos.filter((todo) => todo.id === id)[0];
  }

  get filteredTodos() {
    const showCompleted = this.rootStore.filterStore.showCompleted;
    if (showCompleted) {
      return this.todos;
    }

    return this.todos.filter((todo) => !todo.isCompleted);
  }
}

export default TodoStore;
