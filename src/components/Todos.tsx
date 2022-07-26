import React from "react";
import TodoItem from "./Todoitem";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ToDos: React.FC = () => {
  const todoItems = useSelector((state: RootState) => state.todoItems);
  return (
    <ul>
      {todoItems.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
};

export default ToDos;
