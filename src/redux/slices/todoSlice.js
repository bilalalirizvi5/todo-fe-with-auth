import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  page: 1,
  todos: {
    total: 5,
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
    setPage: (state, payload) => {
      return { ...state, page: payload };
    },
    setTodos: (state, payload) => {
      return { ...state, todos: payload };
    },
  },
});

export const { setLoading, setPage, setTodos } = todoSlice.actions;

export default todoSlice.reducer;
