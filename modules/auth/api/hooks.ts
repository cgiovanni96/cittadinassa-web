import { useQuery, useMutation } from "react-query";

import { current, login, logout } from "./api";

export const useCurrent = () => {
  return useQuery("currentUser", current, { retry: 1 });
};

export const useLogin = () => {
  return useMutation("loginUser", login);
};

export const useLogout = () => {
  return useMutation("logoutUser", logout);
};
