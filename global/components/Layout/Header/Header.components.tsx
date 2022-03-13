import React from "react";
import { Container, Group, Burger, Text } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import Link from "next/link";

import { headerStyles } from "../styles";
import { UserMenu } from "./UserMenu.component";
import { useCurrent } from "@auth/api/hooks";
import { ActionMenu } from "./ActionMenu.component";
import { Sidebar } from "./Sidebar.component";
import { Navigation } from "./Navigation.component";

const DesktopRightSide = () => {
  const { data, isSuccess } = useCurrent();
  const { classes } = headerStyles();

  return (
    <Container className={classes.rightSide}>
      {isSuccess && data ? <UserMenu user={data.user} /> : <ActionMenu />}
    </Container>
  );
};

export const Header = () => {
  const { classes } = headerStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  return (
    <Container className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Link href="/" passHref>
            <Text component="a">cittadinassa</Text>
          </Link>

          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />

          <DesktopRightSide />
        </Group>
      </Container>

      <Navigation />

      <Sidebar opened={opened} close={() => toggleOpened()} />
    </Container>
  );
};
