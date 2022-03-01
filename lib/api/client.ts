import { QueryClient } from "react-query";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { TOKEN } from "@lib/constant";
import { Method } from "./method.type";

export const client = new QueryClient();

export const api = axios.create({
  baseURL: "http://localhost:7000",
});

// optionaly add base url

export const apiWithConfig = (): AxiosInstance => {
  const localToken = window.localStorage.getItem(TOKEN);
  const token = localToken ? JSON.parse(localToken) : null;
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return api;
};

export type Request = {
  url: string;
  method: Method;
  config?: AxiosRequestConfig;
  data?: Record<string, any>;
};

export const request = async <T>({
  url,
  method,
  config,
  data,
}: Request): Promise<{
  response: AxiosResponse<T, any> | undefined;
  error: any;
}> => {
  const api = apiWithConfig();

  let response: AxiosResponse<T, any> | undefined = undefined;
  let error: any = undefined;

  try {
    switch (method) {
      case Method.GET:
        response = await api.get<T>(url, config);
        break;
      case Method.POST:
        response = await api.post<T>(url, data, config);
        break;

      case Method.DELETE:
        response = await api.delete<T>(url, config);
        break;

      case Method.PUT:
        response = await api.put<T>(url, data, config);
        break;
    }
  } catch (e) {
    error = e;
  }

  return { response, error };
};
