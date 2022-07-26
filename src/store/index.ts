import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import Todo from "../models/todo";
// import logger from 'redux-logger';

type TodoState = {
  todoItems: Todo[];
};

const initialState: TodoState = {
  todoItems: [],
};
const createId = ()=> {
  return Math.random().toString()
} 

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {

      const newTodo:Todo = {
        id: createId(),
        text:action.payload
      };

      state.todoItems = [newTodo, ...state.todoItems];
    },
    removeTodo(state, action) {
      state.todoItems = state.todoItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer
});


export default store;
export type RootState = ReturnType<typeof store.getState>;
export const todoActions = todoSlice.actions;
