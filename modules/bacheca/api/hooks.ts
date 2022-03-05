import { calls } from "data/api.data";
import { useMutation, useQuery } from "react-query";
import { getAll, uploadCover } from "./calls";

export const useGetFishes = () => {
  return useQuery(calls.getAllFishes, getAll);
};

export const useUploadCover = () => {
  return useMutation(calls.uploadCover, uploadCover);
};
