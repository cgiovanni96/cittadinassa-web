import { getLocalStorage, setLocalStorage } from "./utils";
import { TOKEN } from "@lib/constant";
import create from "zustand";

type TokenStore = {
  token: string;
  setToken: (token: string) => void;
};

export const tokenStore = create<TokenStore>((set) => ({
  token: getLocalStorage(TOKEN),
  setToken: (token: string) => {
    setLocalStorage(TOKEN, token);
    set({ token });
  },
}));
