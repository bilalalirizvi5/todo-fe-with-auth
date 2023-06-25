import Axios from "axios";

export const base_url = "http://192.168.5.108:5000";

export const publicAPI = Axios.create({ baseURL: base_url });

export const privateAPI = Axios.create({ baseURL: base_url });
