import { useNotifications } from "@mantine/notifications";
import { useEffect } from "react";
import { Check } from "tabler-icons-react";

export const useDownloadNotification = (
  status: "idle" | "error" | "loading" | "success"
) => {
  const notifications = useNotifications();

  useEffect(() => {
    if (status === "loading") {
      notifications.showNotification({
        id: "file-downloading",
        autoClose: false,
        disallowClose: true,
        loading: true,
        message: "Download in corso",
      });
    }

    if (status === "success") {
      notifications.updateNotification("file-downloading", {
        id: "file-downloading",
        color: "teal",
        message: "File scaricato con successo",
        icon: <Check />,
        autoClose: 2000,
      });
    }
  }, [status]);
};
