import { calls } from "data/api.data";
import { useMutation, useQuery } from "react-query";
import { createFish, getAll, getFish, uploadCover } from "./calls";

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
