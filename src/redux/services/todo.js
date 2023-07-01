import { publicAPI } from "@config";
import { store } from "@redux/store";

import swal from "sweetalert";
import moment from "moment";

import {
  setCreateLoading,
  setEditTrue,
  setLoading,
  setStatus,
  setStatusId,
  setTodos,
} from "@slices/todoSlice";
import { setCreateTodoModal, setStatusModal } from "@redux/slices/modalSlice";

export const createTodo = async (payload, resetForm) => {
  const updatedObj = {
    ...payload,
    dueDate: moment(payload.dueDate).endOf("day").format(),
  };
  store.dispatch(setCreateLoading(true));
  try {
    const response = await publicAPI.post("/todo/create", updatedObj);
    if (response.status === 200) {
      resetForm();
      swal("Success!", `${response?.data?.message}!`, "success");
      store.dispatch(setCreateTodoModal(false));
      await getTodo({ status: "All Todo", page: 1 });
    }
  } catch (error) {
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setCreateLoading(false));
};

export const getTodo = async (payload) => {
  const queryString = new URLSearchParams(payload).toString();
  store.dispatch(setLoading(true));
  try {
    const response = await publicAPI.get(`/todo/get?${queryString}`);
    if (response.status === 200) {
      store.dispatch(
        setTodos({
          total: response.data.total,
          data: response.data.todos,
        })
      );
    }
  } catch (error) {
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setLoading(false));
};

export const editTodo = (obj) => {
  store.dispatch(setEditTrue(obj));
  store.dispatch(setCreateTodoModal(true));
};
export const updateTodo = async (payload, resetForm, id) => {
  const { filter, page } = store.getState().todo;
  const updatedObj = {
    ...payload,
    dueDate: moment(payload.dueDate).endOf("day").format(),
  };
  store.dispatch(setCreateLoading(true));
  try {
    const response = await publicAPI.put(`/todo/update/${id}`, updatedObj);
    if (response.status === 200) {
      resetForm();
      swal("Success!", `${response?.data?.message}!`, "success");
      store.dispatch(setCreateTodoModal(false));
      await getTodo({ status: filter !== "" ? filter : "All Todo", page });
    }
  } catch (error) {
    console.log(error);
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setCreateLoading(false));
};
export const updateStatus = async (payload, id) => {
  // const { filter, page } = store.getState().todo;
  store.dispatch(setStatus(payload.status));
  store.dispatch(setCreateLoading(true));
  try {
    const response = await publicAPI.put(`/todo/update/${id}`, payload);
    if (response.status === 200) {
      swal("Success!", `Status updated successfully!`, "success");
      store.dispatch(setStatusModal(false));
      store.dispatch(setStatusId(""));
      await getTodo({
        status: "All Todo",
        page: 1,
      });
    }
  } catch (error) {
    console.log(error);
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
  store.dispatch(setCreateLoading(false));
  store.dispatch(setStatus(""));
};

export const deleteWarning = async (id) => {
  const willDelete = await swal({
    title: "Are you sure?",
    text: "Are you sure that you want to delete?",
    icon: "warning",
    dangerMode: true,
    buttons: ["Cancel", "Delete"],
  });
  if (willDelete) {
    await deleteTodo(id);
  }
};
export const deleteTodo = async (payload) => {
  try {
    const response = await publicAPI.delete(`/todo/delete/${payload}`);
    if (response.status === 200) {
      swal("Success!", `${response?.data?.message}!`, "success");
      await getTodo({ status: "All Todo", page: 1 });
    }
  } catch (error) {
    swal("Error!", error?.response?.data?.message || error?.message, "error");
  }
};
