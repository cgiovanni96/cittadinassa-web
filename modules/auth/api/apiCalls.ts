import { User } from "@model/User.model";
import { LoginDto } from "./auth.type";
import { request } from "@lib/api/client";
import { Method } from "@lib/api/method.type";

export const current = async () => {
  const { response, error } = await request<{ user: User }>({
    url: "/auth/current",
    method: Method.GET,
  });

  if (error || !response) throw new Error();
  return response.data;
};

export const login = async (loginDto: LoginDto) => {
  const { response, error } = await request<{ token: string }>({
    url: "/auth/login",
    method: Method.POST,
    data: loginDto,
  });

  if (error || !response) throw new Error();
  return response.data;
};

export const logout = async () => {
  const { response, error } = await request<{ destroyed: boolean }>({
    url: "/auth/logout",
    method: Method.POST,
  });
  if (error || !response) throw new Error();
  return response.data;
};
