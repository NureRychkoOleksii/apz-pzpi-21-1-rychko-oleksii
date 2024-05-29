import useAuthStore from "@/store";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5045/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
