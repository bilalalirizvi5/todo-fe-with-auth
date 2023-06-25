import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      return { ...state, loading: !state.loading };
    },
  },
});

export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
