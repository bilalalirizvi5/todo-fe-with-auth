import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createTodoModal: false,
  statusModal: false,
};

export const modalSlice = createSlice({
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

export const { setCreateTodoModal, setStatusModal } = modalSlice.actions;

export default modalSlice.reducer;
