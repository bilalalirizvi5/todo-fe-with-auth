import { publicAPI, uploadImage } from "@config";
import { store } from "@redux/store";

import swal from "sweetalert";

import { setLoading } from "@slices/settingSlice";
import { updateUser as updateUserRedux } from "@slices/authSlice";

export const updateUser = async (payload) => {
  store.dispatch(setLoading(true));
  try {
    const response = await publicAPI.put(`/user/update`, payload);
    if (response.status === 200) {
      swal("Success!", `${response?.data?.message}!`, "success");
      store.dispatch(updateUserRedux(payload));
      payload.hasOwnProperty("userName") &&
        localStorage.setItem("userName", payload.userName);
      payload.hasOwnProperty("email") &&
        localStorage.setItem("email", payload.email);
      payload.hasOwnProperty("photoUrl") &&
        localStorage.setItem("photoUrl", payload.photoUrl);
    }
  } catch (error) {
    console.log(error);
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setLoading(false));
};

export const updateProfilePicture = async (payload) => {
  store.dispatch(setLoading(true));
  try {
    const url = await uploadImage(payload.file);
    await updateUser({ photoUrl: url });
    store.dispatch(updateUserRedux(url));
  } catch (error) {
    console.log(error);
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setLoading(false));
};
