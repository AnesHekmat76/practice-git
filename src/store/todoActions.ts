import { todoActions } from "./todo-slice";
import Todo from "../models/todo";
import { AppDispatch } from ".";

export const storeToDos = (todoItems:Todo[]):any => {
  return () => {
    localStorage.setItem("toDos", JSON.stringify(todoItems));
  };
};

export const getStoredToDos = ():any => {
  return (dispatch:AppDispatch) => {
    const savedTasks = JSON.parse(localStorage.getItem("toDos") || '' );
    if (savedTasks.length > 0) {
        dispatch(todoActions.getToDosFromLocalStorage(savedTasks));
    }
  };
};