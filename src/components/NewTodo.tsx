import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo-slice";

const NewTodo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length > 0) {
      dispatch(todoActions.addTodo(enteredText));
      inputRef.current!.value = "";
      return;
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="text">Todo text</label>
      <input ref={inputRef} type="text" id="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
