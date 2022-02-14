import FetchToDoList from './FetchToDoList';
import CompletedToggle from './CompletedToggle';
import useStores from './useStores';

const ToDoListPage = () => {
  const { filterStore } = useStores();

  return (
    <>
      <CompletedToggle
        text="Show Completed"
        initialState={filterStore.showCompleted}
        onChange={(checked) => filterStore.showCompletedChanged(checked)}
      />
      <FetchToDoList showCompleted={filterStore.showCompleted} />
    </>
  );
};

export default ToDoListPage;
