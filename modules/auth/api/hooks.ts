import { calls } from "data/api.data";
import { useQuery, useMutation } from "react-query";

import { current, login, logout } from "./apiCalls";

export const useCurrent = () => {
  return useQuery(calls.currentUser, current, { retry: 1 });
};

export const useLogin = () => {
  return useMutation(calls.login, login);
};

export const useLogout = () => {
  return useMutation(calls.logout, logout);
};
