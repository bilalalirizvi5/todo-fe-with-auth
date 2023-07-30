import authSlice from "./authSlice";
import todoSlice from "./todoSlice";
import modalSlice from "./modalSlice";
import settingSlice from "./settingSlice";

const rootSlice = {
  auth: authSlice,
  todo: todoSlice,
  modal: modalSlice,
  setting: settingSlice,
};

export default rootSlice;
