import axios from "axios";
const server = import.meta.env.VITE_API_URL || "http://localhost:4000";
const axiosInstance = axios.create({
  baseURL: `${server}/api`,
  timeout: 5000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;