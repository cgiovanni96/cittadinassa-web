import { tokenStore } from "@global/store/token.store";
import Axios, { AxiosInstance } from "axios";
import { createContext, useContext, useMemo } from "react";

export const AxiosContext = createContext<AxiosInstance | undefined>(undefined);

export default function AxiosProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const { token } = tokenStore();

  const axios = useMemo(() => {
    const axios = Axios.create({
      baseURL: "http://localhost:7000",
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.request.use((config) => {
      // Read token for anywhere, in this case directly from localStorage
      if (token && token !== "" && config && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return axios;
  }, [token]);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

export function useAxios() {
  return useContext(AxiosContext);
}
