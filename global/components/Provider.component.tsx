import { tokenStore } from "@global/store/token.store";
import { ApiProvider } from "@lib/api";
import { Children } from "@lib/types/Children.type";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect } from "react";

export const Provider = ({ children }: Children) => {
  const { setStorage } = tokenStore();

  useEffect(() => {
    setStorage(window.localStorage);
  }, []);

  return (
    <ApiProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </ApiProvider>
  );
};
