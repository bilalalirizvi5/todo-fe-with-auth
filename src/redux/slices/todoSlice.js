import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  todos: {
    total: 0,
    data: [
      {
        todo: "Develope Application",
        description: "This apllication develope using React Js.",
        createdAt: new Date(),
        dueDate: new Date(),
        status: "Not Started",
      },
      {
        todo: "Develope Application",
        description: "This apllication develope using React Js.",
        createdAt: new Date(),
        dueDate: new Date(),
        status: "Active",
      },
      {
        todo: "Develope Application",
        description: "This apllication develope using React Js.",
        createdAt: new Date(),
        dueDate: new Date(),
        status: "Paused",
      },
      {
        todo: "Develope Application",
        description: "This apllication develope using React Js.",
        createdAt: new Date(),
        dueDate: new Date(),
        status: "Dropped",
      },
      {
        todo: "Develope Application",
        description: "This apllication develope using React Js.",
        createdAt: new Date(),
        dueDate: new Date(),
        status: "Completed",
      },
    ],
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setLoading: (state, payload) => {
      return { ...state, loading: payload };
    },
    setTodos: (state, payload) => {
      return { ...state, todos: payload };
    },
  },
});

export const { setLoading, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
