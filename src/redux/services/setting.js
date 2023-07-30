import { publicAPI } from "@config";
import { store } from "@redux/store";

import swal from "sweetalert";

import { setLoading } from "@slices/settingSlice";

export const updateUser = async (payload, id) => {
  const updatedObj = {
    ...payload,
  };
  store.dispatch(setLoading(true));
  try {
    const response = await publicAPI.put(`/user/update/${id}`, updatedObj);
    if (response.status === 200) {
      swal("Success!", `${response?.data?.message}!`, "success");
    }
  } catch (error) {
    console.log(error);
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setLoading(false));
};
