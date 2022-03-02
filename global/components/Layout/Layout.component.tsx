import { useUnconfirmedNotification } from "@global/hooks/useUnconfirmedNotification.hook";
import { AppShell, Container } from "@mantine/core";

import { Header } from "./Header/Header.components";
import { layoutStyles } from "./styles";

export const Layout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // CUSTOM HOOKS
  useUnconfirmedNotification();
  // STYLES
  const { classes } = layoutStyles();

  return (
    <AppShell
      padding="md"
      header={<Header />}
      className={classes.app}
      classNames={{ body: classes.main, main: classes.main }}
    >
      <Container className={classes.main}>{children}</Container>
    </AppShell>
  );
};
