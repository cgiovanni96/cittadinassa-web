import { TokenStore } from "./token.store";

export const getLocalStorage = (key: string, store: TokenStore): string => {
  if (!store) return "";
  const token = store.storage ? store.storage.getItem(key) : null;
  if (token === null) return "";
  return JSON.parse(token) || "";
};

export const setLocalStorage = (
  key: string,
  value: string,
  store: TokenStore
) => {
  if (!store.storage) return;
  store.storage!.setItem(key, JSON.stringify(value));
};
