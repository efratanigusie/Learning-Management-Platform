import API from "./api";

export const loginUser = async (email: string, password: string) => {
  return API.post("/auth/login", { email, password });
};
