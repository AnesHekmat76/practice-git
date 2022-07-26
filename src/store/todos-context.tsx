import Todo from "../models/todo";
import React, { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const ToDosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const ToDoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
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

  const contextValue: TodoContextObj = {
    items: todoList,
    addTodo: addNewTodo,
    removeTodo: deleteTodo,
  };

  return (
    <ToDosContext.Provider value={contextValue}>
      {props.children}
    </ToDosContext.Provider>
  );
};

export default ToDoContextProvider;