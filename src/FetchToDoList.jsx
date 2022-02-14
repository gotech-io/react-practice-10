import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';
import useStores from './useStores';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

const FetchToDoList = () => {
  const { todoStore } = useStores();

  const handleChange = async (id, changes) => {
    todoStore.patchTodo(id, changes);
  };

  const handleAdd = async (title) => {
    todoStore.postNewTodo(title);
  };

  return (
    <>
      <ToDoList todos={toJS(todoStore.filteredTodos)} onChange={handleChange} />
      <ToDoInput onAdd={handleAdd} />
    </>
  );
};

export default observer(FetchToDoList);
