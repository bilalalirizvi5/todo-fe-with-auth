import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: {
    userName: localStorage.getItem("userName"),
    email: localStorage.getItem("email"),
    photoUrl: localStorage.getItem("photoUrl"),
    _id: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      return { ...state, loading: !state.loading };
    },
    setUserInit: (state, { payload }) => {
      return { ...state, user: payload };
    },
    updateUser: (state, { payload }) => {
      return {
        ...state,
        user: {
          ...state.user,
          ...payload,
        },
      };
    },
  },
});

export const { setLoading, setUserInit, updateUser } = authSlice.actions;

export default authSlice.reducer;
