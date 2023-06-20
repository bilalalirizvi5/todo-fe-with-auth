import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./slices/rootSlice";

export const store = configureStore({
  reducer: rootSlice,
});
