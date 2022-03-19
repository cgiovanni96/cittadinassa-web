import { useEffect, useState } from "react";
import { DriveFile } from "@global/types/file.type";

const driveFolderType = "application/vnd.google-apps.folder";

export const useFormatDrive = (data?: { files: DriveFile[] }) => {
  const [formattedDriveInfo, setFormattedDriveInfo] =
    useState<{ folders: DriveFile[]; files: DriveFile[] }>();

  useEffect(() => {
    if (!data) {
      setFormattedDriveInfo(undefined);
      return;
    }

    const info: { folders: DriveFile[]; files: DriveFile[] } = {
      folders: [],
      files: [],
    };

    info.files = data.files.filter((file) => file.mimeType !== driveFolderType);
    info.folders = data.files.filter(
      (file) => file.mimeType === driveFolderType
    );

    setFormattedDriveInfo(info);
  }, [data]);

  return { driveInfo: formattedDriveInfo };
};
