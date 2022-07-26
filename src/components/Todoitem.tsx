import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{ todo: Todo; deleteTodo: (id: string) => void }> = (
  props
) => {
  const onRemoveTodoClick = () => {
    props.deleteTodo(props.todo.id);
  };
  return (
    <div>
      <li style={{ display: "inline" }}>{props.todo.text}</li>
      <button onClick={onRemoveTodoClick}>Delete</button>
    </div>
  );
};

export default TodoItem;
