import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createTodoModal: false,
  statusModal: false,
};

export const todoSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCreateTodoModal: (state, { payload }) => {
      return { ...state, createTodoModal: payload };
    },
    setStatusModal: (state, { payload }) => {
      return { ...state, statusModal: payload };
    },
  },
});

export const { setCreateTodoModal, setStatusModal } = todoSlice.actions;

export default todoSlice.reducer;
