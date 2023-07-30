import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      return { ...state, loading: payload };
    },
  },
});

export const { setLoading } = settingSlice.actions;

export default settingSlice.reducer;
