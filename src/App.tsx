import ToDos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { todoActions } from "./store/todo-slice";

function App() {
  const todoItems = useSelector((state: RootState) => state.todo.todoItems);
  const dispatch = useDispatch();

  useEffect(() => {
    let storedToDos = localStorage.getItem("toDos");
    const savedTasks = JSON.parse(storedToDos || '');
    if (savedTasks.length > 0) {
      dispatch(todoActions.getToDosFromLocalStorage(savedTasks));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div>
      <NewTodo />
      <ToDos />
    </div>
  );
}

export default App;
