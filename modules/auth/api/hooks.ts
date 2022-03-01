import { calls } from "data/api.data";
import { useQuery, useMutation } from "react-query";

import { confirm, create, current, login, logout } from "./apiCalls";

export const useCurrent = () => {
  return useQuery(calls.currentUser, current, { retry: 1 });
};

export const useLogin = () => {
  return useMutation(calls.login, login);
};

export const useLogout = () => {
  return useMutation(calls.logout, logout);
};

export const useCreateUser = () => {
  return useMutation(calls.createUser, create);
};

export const useConfirmUser = () => {
  return useMutation(calls.confirmUser, confirm);
};
