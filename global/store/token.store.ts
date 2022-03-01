import { getLocalStorage, setLocalStorage } from "./utils";
import { TOKEN } from "@lib/constant";
import create from "zustand";

export type TokenStore = {
  token: string;
  setToken: (token: string) => void;
  storage: Storage | undefined;
  setStorage: (storage: Storage) => void;
};

export const tokenStore = create<TokenStore>((set, get) => ({
  token: getLocalStorage(TOKEN, get()),
  setToken: (token: string) => {
    setLocalStorage(TOKEN, token, get());
    set({ token });
  },
  storage: undefined,
  setStorage: (storage: Storage) => set({ storage }),
}));
