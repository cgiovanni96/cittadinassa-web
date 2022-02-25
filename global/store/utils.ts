export const getLocalStorage = (key: string): string => {
  const ww = global.window;
  return ww ? JSON.parse(ww.localStorage.getItem(key) || "") : "";
};
export const setLocalStorage = (key: string, value: string) => {
  const ww = global.window;
  ww && ww.localStorage.setItem(key, JSON.stringify(value));
};
