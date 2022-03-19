import { DriveFile, UploadedFile } from "@global/types/file.type";
import { request } from "@lib/api/client";
import { Method } from "@lib/api/method.type";
import Fish from "@model/Net/Fish.model";
import { ifError } from "assert";
import { GroupedFishes } from "../bacheca.types";
import { CreateFishDto } from "./fish.dto";

export const getAll = async () => {
  const { response, error } = await request<{ fishes: GroupedFishes }>({
    url: "/fish/",
    method: Method.GET,
  });

  if (error || !response) throw new Error();
  return response.data;
};

export const uploadCover = async (data: FormData) => {
  const { response, error } = await request<UploadedFile>({
    url: "/fish/upload",
    method: Method.POST,
    data: data,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  });

  if (error || !response) throw new Error();
  return response.data;
};

export const createFish = async (data: CreateFishDto) => {
  const { response, error } = await request<{ fish: Fish }>({
    url: "/fish/",
    method: Method.POST,
    data,
  });

  if (error || !response) throw new Error();

  return response.data;
};

export const getFish = async (id?: string) => {
  const { response, error } = await request<{ fish: Fish }>({
    url: `/fish/${id}`,
    method: Method.GET,
  });

  if (error || !response) throw new Error();

  return response.data;
};

export const getFiles = async (folderId: string) => {
  const { response, error } = await request<{ files: DriveFile[] }>({
    url: `/file/folder/${folderId}`,
    method: Method.GET,
  });

  if (error || !response) throw new Error();

  return response.data;
};

export const getFile = async (fileId?: string) => {
  const { response, error } = await request<BlobPart>({
    url: `/file/file/${fileId}`,
    method: Method.GET,
    config: {
      responseType: "blob",
      headers: {
        "Content-Type": "application/octet-stream",
      },
    },
  });

  if (error || !response) throw new Error();

  return response.data;
};
