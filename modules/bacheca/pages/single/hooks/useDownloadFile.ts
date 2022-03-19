import { useEffect } from "react";

export type DownloadFileProps = {
  status: "idle" | "error" | "loading" | "success";
  fileData?: BlobPart;
  fileMeta?: { name: string; type: string }; //this could be a generic
  clear?: () => void;
};

const formatMeta = (
  name: string,
  type: string
): { name: string; type: string } => {
  if (type.includes("google")) {
    return {
      name: name + ".pdf",
      type: "application/pdf",
    };
  }

  return {
    name: name,
    type: type,
  };
};

export const useDownloadFile = ({
  status,
  fileData,
  fileMeta,
  clear,
}: DownloadFileProps) => {
  useEffect(() => {
    if (status === "success" && fileMeta && fileData) {
      const { name, type } = formatMeta(fileMeta.name, fileMeta.type);
      const blob = new Blob([fileData], { type: type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      link.setAttribute("id", "something");
      link.setAttribute("download", name);
      link.setAttribute("target", "_blank");
      console.log(link);
      link.click();
      link.remove();
      clear && clear();
    }
  }, [status]);
};
