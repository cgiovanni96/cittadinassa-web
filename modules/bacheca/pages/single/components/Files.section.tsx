import { useGetFile, useGetFiles } from "@modules/bacheca/api/hooks";
import { useState } from "react";
import { useDownloadNotification } from "../hooks/useDownloadNotification";
import { useFormatDrive } from "../hooks/useFormatDrive";
import { FolderList } from "../ui/Folder.list";
import { FileList } from "../ui/File.list";
import { useDownloadFile } from "../hooks/useDownloadFile";
import { Loader } from "@global/components/Utility/Loader.components";

export type FilesProps = {
  folderId: string;
};

export const Files = ({ folderId }: FilesProps) => {
  // states
  const [file, setFile] = useState<string>();
  const [currentFolder, setCurrentFolder] = useState<string[]>([folderId]);
  const [fileMeta, setFileMeta] = useState<{ name: string; type: string }>();

  // query hooks
  const { data: folderData } = useGetFiles(currentFolder[0]);
  const { data: fileData, status: downloadStatus } = useGetFile(file);

  // custom hooks
  useDownloadNotification(downloadStatus);
  const { driveInfo } = useFormatDrive(folderData);
  useDownloadFile({
    fileData: fileData,
    status: downloadStatus,
    fileMeta: fileMeta,
    clear: () => {
      setFile(undefined);
      setFileMeta(undefined);
    },
  });

  return (
    <>
      {!driveInfo && <Loader />}
      {driveInfo && (
        <>
          <FolderList
            folders={driveInfo.folders}
            isSubFolder={currentFolder.length > 1}
            goBack={() => setCurrentFolder(currentFolder.slice(1))}
            goSubFolder={(folderId: string) =>
              setCurrentFolder([folderId, ...currentFolder])
            }
          />
          <FileList
            files={driveInfo.files}
            canGoBack={
              driveInfo.folders.length === 0 && currentFolder.length > 1
            }
            goBack={() => setCurrentFolder(currentFolder.slice(1))}
            download={(id: string, type: string, name: string) => {
              setFile(id);
              setFileMeta({
                name: name,
                type: type,
              });
            }}
          />
        </>
      )}
    </>
  );
};
