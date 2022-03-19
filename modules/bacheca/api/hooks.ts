import { calls } from "data/api.data";
import { useMutation, useQuery } from "react-query";
import {
  createFish,
  getAll,
  getFile,
  getFiles,
  getFish,
  uploadCover,
} from "./calls";

export const useGetFishes = () => {
  return useQuery(calls.getAllFishes, getAll);
};

export const useUploadCover = () => {
  return useMutation(calls.uploadCover, uploadCover);
};

export const useCreateFish = () => {
  return useMutation(calls.createFish, createFish);
};

export const useGetFish = (id?: string) => {
  return useQuery([calls.getFish, id], () => getFish(id), { enabled: !!id });
};

export const useGetFiles = (folderId: string) => {
  return useQuery([calls.getFiles, folderId], () => getFiles(folderId));
};

export const useGetFile = (fileId?: string) => {
  return useQuery([calls.getFile, fileId], () => getFile(fileId), {
    enabled: !!fileId,
  });
};
