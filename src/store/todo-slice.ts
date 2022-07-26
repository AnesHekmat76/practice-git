import { createSlice } from "@reduxjs/toolkit";
import Todo from "../models/todo";

type TodoState = {
  todoItems: Todo[];
};

const initialTodoState: TodoState = {
  todoItems: [],
};

const createId = () => {
  return Math.random().toString();
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const newTodo: Todo = {
        id: createId(),
        text: action.payload,
      };

      state.todoItems = [newTodo, ...state.todoItems];
    },
    removeTodo(state, action) {
      state.todoItems = state.todoItems.filter(
        (item) => item.id !== action.payload
      );
    },
    getToDosFromLocalStorage (state,action) {
      state.todoItems = action.payload;
    }
  },
});

export const todoActions = todoSlice.actions;
export const todoReducer =  todoSlice.reducer;