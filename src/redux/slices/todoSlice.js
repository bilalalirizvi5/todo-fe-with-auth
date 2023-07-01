import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  createLoading: false,
  page: 1,
  filter: "",
  todos: {
    total: 0,
    data: [],
  },
  edit: {
    isEdit: false,
    editObj: {},
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      return { ...state, loading: payload };
    },

    setCreateLoading: (state, { payload }) => {
      return { ...state, createLoading: payload };
    },

    setFilter: (state, { payload }) => {
      return { ...state, filter: payload, page: 1 };
    },

    setPage: (state, { payload }) => {
      return { ...state, page: payload };
    },

    setTodos: (state, { payload }) => {
      return { ...state, todos: payload };
    },

    setEditTrue: (state, { payload }) => {
      return { ...state, edit: { isEdit: true, editObj: payload } };
    },

    setEditFalse: (state) => {
      return { ...state, edit: { isEdit: false, editObj: {} } };
    },
  },
});

export const {
  setLoading,
  setCreateLoading,
  setFilter,
  setPage,
  setTodos,
  setEditTrue,
  setEditFalse,
} = todoSlice.actions;

export default todoSlice.reducer;
