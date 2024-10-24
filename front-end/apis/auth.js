import axiosInstance from "./axios_inst";

export const login = async (name, password) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      name,
      password,
    });
    localStorage.setItem("access_token", response.data.token);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      name,
      email,
      password,
    });
    localStorage.setItem("access_token", response.data.token);
    return response;
  } catch (error) {
    return error.response;
  }
};
