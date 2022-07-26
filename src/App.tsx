import ToDos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useDispatch } from "react-redux";
import { storeToDos } from "./store/todoActions";
import { getStoredToDos } from "./store/todoActions";

function App() {
  const todoItems = useSelector((state: RootState) => state.todo.todoItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStoredToDos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(storeToDos(todoItems));
  }, [todoItems,dispatch]);

  return (
    <div>
      <h2>Simple To do app</h2>
      <p>Just for practice</p>
      <NewTodo />
      <ToDos />
    </div>
  );
}

export default App;
