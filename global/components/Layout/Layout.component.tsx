import { useUnconfirmedNotification } from "@global/hooks/useUnconfirmedNotification.hook";
import { Tabs, AppShell, Text, Drawer, Center, Container } from "@mantine/core";
import { useState } from "react";

import { Header } from "./Header/Header.components";
import { layoutStyles } from "./styles";

const NavbarLinks = ({ drawer }: { drawer?: boolean }): JSX.Element => {
  const tabChangeCallback = (tabKey?: string): void => {};

  return (
    <Tabs
      onTabChange={(_, tabKey) => tabChangeCallback(tabKey)}
      variant="pills"
      orientation={drawer ? "vertical" : "horizontal"}
      styles={{
        tabControl: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Tab tabKey="/home" label="Home" />
      <Tabs.Tab tabKey="/associazione" label="Associazione" />
    </Tabs>
  );
};

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // CUSTOM HOOKS
  useUnconfirmedNotification();
  // HOOKS
  const [opened, setOpened] = useState(false);
  // STYLES
  const { classes } = layoutStyles();

  return (
    <AppShell
      padding="md"
      header={<Header />}
      className={classes.app}
      classNames={{ body: classes.main, main: classes.main }}
    >
      <Drawer
        opened={opened}
        onClose={() => setOpened((o) => !o)}
        size="md"
        padding="xl"
        position="right"
        title="Navigáció"
      >
        <Center>
          <NavbarLinks drawer={true} />
          <Text>Téma</Text>
        </Center>
      </Drawer>

      <Container className={classes.main}>{children}</Container>
    </AppShell>
  );
};
