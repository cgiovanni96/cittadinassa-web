import { request } from "@lib/api/client";
import { Method } from "@lib/api/method.type";
import { GroupedFishes } from "../bacheca.types";

export const getAll = async () => {
  const { response, error } = await request<{ fishes: GroupedFishes }>({
    url: "/fish/",
    method: Method.GET,
  });

  if (error || !response) throw new Error();
  return response.data;
};

export const uploadCover = async (data: FormData) => {
  const { response, error } = await request<{ uplaoded: boolean }>({
    url: "/fish/upload",
    method: Method.POST,
    data: data,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  });

  if (error || !response) throw new Error();
  return response.data;
};
