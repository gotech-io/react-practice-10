import { createContext, useContext } from 'react';
import RootStore from './store';

const rootStore = new RootStore();

const context = createContext({
  todoStore: rootStore.todoStore,
  filterStore: rootStore.filterStore,
});

const useStores = () => useContext(context);

rootStore.todoStore.getTodos();
export default useStores;
