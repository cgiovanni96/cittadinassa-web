import { UploadedFile } from "@global/types/file.type";
import { FISH_TYPE } from "@model/Net/Fish.model";

export type CreateFishDto = {
  name: string;
  introduction: string;
  description?: string;
  type: FISH_TYPE;

  media: MediaInfo;
};

type MediaInfo = {
  color?: string;
  emoji?: string;
  cover?: UploadedFile;
};
