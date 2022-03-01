import { useNotifications } from "@mantine/notifications";
import { AlertTriangle } from "tabler-icons-react";
import { useEffect } from "react";

import { useCurrent } from "@modules/auth/api/hooks";
export const useUnconfirmedNotification = () => {
  const { data, isSuccess, status } = useCurrent();
  const notification = useNotifications();

  useEffect(() => {
    if (isSuccess && data && !data.user.authInfo.confirmed)
      notification.showNotification({
        id: "user-unconfirmed",
        title: "Conferma l'email!",
        message:
          "Conferma il tuo indirizzo email utilizzando il link che ti abbiamo mandato!",
        icon: <AlertTriangle />,
        color: "orange",
      });
  }, [status]);
};
