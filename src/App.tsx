import ToDos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

const toDos = [new Todo("Learn react"), new Todo("Learn Typescript")];
const task = new Todo("test");

function App() {
  const [todoList, setTodo] = useState<Todo[]>([]);

  const addNewTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodo((prevState) => {
      return [newTodo, ...prevState];
    });
  };

  const deleteTodo = (id: string) => {
    setTodo((prevState) => prevState.filter((item) => item.id !== id));
  };

  const myFunc: (input: string) => string = (input) => {
    return input;
  };
  const myFunc2 = (input: string): string => {
    return input;
  };

  return (
    <div>
      <NewTodo addNewTodo={addNewTodo} />
      <ToDos />
    </div>
  );
}

export default App;
