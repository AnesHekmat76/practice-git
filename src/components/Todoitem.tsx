import React from "react";
import Todo from "../models/todo";
import { useDispatch } from "react-redux";
import { todoActions } from "../store";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  const dispatch = useDispatch();
  const onRemoveTodoClick = () => {
    dispatch(todoActions.removeTodo(props.todo.id));
  };

  return (
    <div>
      <li style={{ display: "inline" }}>{props.todo.text}</li>
      <button onClick={onRemoveTodoClick}>Delete</button>
    </div>
  );
};

export default TodoItem;