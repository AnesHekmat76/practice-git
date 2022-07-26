import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{ addNewTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length > 0) {
      props.addNewTodo(enteredText);
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
