import authSlice from "./authSlice";
import todoSlice from "./todoSlice";
import modalSlice from "./modalSlice";

const rootSlice = {
  auth: authSlice,
  todo: todoSlice,
  modal: modalSlice,
};

export default rootSlice;
