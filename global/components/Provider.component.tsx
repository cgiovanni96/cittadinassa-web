import { ApiProvider } from "@lib/api";
import { Children } from "@lib/types/Children.type";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export const Provider = ({ children }: Children) => {
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
