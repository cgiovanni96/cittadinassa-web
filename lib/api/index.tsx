import { QueryClientProvider, setLogger } from "react-query";

import { Children } from "../types/Children.type";
import AxiosProvider from "./axios";
import { client } from "./client";

export const ApiProvider = ({ children }: Children) => {
  setLogger({
    log: () => {},
    warn: () => {},
    error: () => {}, // do nothing
  });
  return (
    <AxiosProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </AxiosProvider>
  );
};
