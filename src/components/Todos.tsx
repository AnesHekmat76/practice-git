import React from "react";
import Todo from "../models/todo";
import { ToDosContext } from "../store/todos-context";
import { useContext } from "react";
import TodoItem from "./Todoitem";

const ToDos: React.FC = () => {
  const todoCtx = useContext(ToDosContext);
  todoCtx.removeTodo;
  return (
    <ul>
      {todoCtx.items.map((item) => (
        <TodoItem key={item.id} todo={item} deleteTodo={todoCtx.removeTodo} />
      ))}
    </ul>
  );
};

export default ToDos;