import { publicAPI } from "@config";
import { store } from "@redux/store";
import { setLoading, setUserInit } from "@slices/authSlice";
import swal from "sweetalert";

export const createUser = async (payload, resetForm, navigate) => {
  const { userName, email, password } = payload;
  const userData = {
    userName,
    email,
    password,
  };
  store.dispatch(setLoading());
  try {
    const response = await publicAPI.post("/user/create", userData);
    if (response.status === 200) {
      resetForm();
      swal("Success!", `${response?.data?.message}!`, "success");
      navigate("/login");
    }
  } catch (error) {
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setLoading());
};

export const loginUser = async (payload, resetForm, navigate) => {
  const { email, password } = payload;
  const userData = {
    email,
    password,
  };
  store.dispatch(setLoading());
  try {
    const response = await publicAPI.post("/user/login", userData);
    if (response.status === 200) {
      store.dispatch(setUserInit(response?.data?.user));
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("email", response?.data?.user?.email);
      localStorage.setItem("userId", response?.data?.user?._id);
      localStorage.setItem("userName", response?.data?.user?.userName);
      localStorage.setItem("photoUrl", response?.data?.user?.photoUrl);
      localStorage.setItem(
        "passwordRecoveryToken",
        response?.data?.user?.passwordRecoveryToken
      );
      resetForm();
      swal("Success!", `${response?.data?.message}!`, "success");
      navigate("/");
    }
  } catch (error) {
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setLoading());
};
