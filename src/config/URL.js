import Axios from "axios";

// export const base_url = "http://192.168.5.108:5000";
export const base_url = "http://192.168.0.113:5000";

export const publicAPI = Axios.create({
  baseURL: base_url,
});

publicAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export const privateAPI = Axios.create({ baseURL: base_url });

// export const attachToken = () => {
//   const jwt = localStorage.getItem("token");
//   publicAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
//   console.log("Token Attached");
// };
