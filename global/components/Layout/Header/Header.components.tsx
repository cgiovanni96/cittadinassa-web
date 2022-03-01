import React, { useEffect, useState } from "react";
import { Container, Group, Tabs, Burger, Text, Box } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";

import { headerStyles } from "../styles";
import { UserMenu } from "./UserMenu.component";
import { useCurrent } from "@auth/api/hooks";
import { ActionMenu } from "./ActionMenu.component";
import { PAGES } from "data/global.data";
import { useRouter } from "next/router";
import Link from "next/link";

const iconDefaults = { strokeWidth: 1 };

const RightSide = () => {
  const { data, isSuccess } = useCurrent();

  return (
    <>
      {isSuccess && data ? (
        <UserMenu user={{ name: data.user.name }} />
      ) : (
        <ActionMenu />
      )}
    </>
  );
};

export const Header = () => {
  const { classes } = headerStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const idx = PAGES.findIndex((page) => page.path === router.pathname);
    setActive(idx);
  }, [router.pathname]);

  const items = PAGES.map((page) => (
    <Tabs.Tab
      label={page.name}
      icon={<page.Icon {...iconDefaults} />}
      key={page.name.toLowerCase()}
    />
  ));

  return (
    <div className={classes.header}>
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

          <RightSide />
        </Group>
      </Container>
      <Container>
        <Tabs
          active={active}
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
          onTabChange={(tabIdx) => {
            router.push(PAGES[tabIdx].path);
            setActive(tabIdx);
          }}
        >
          {items}
        </Tabs>
      </Container>
      {/* {isSuccess && data && !data.user.authInfo.confirmed && (
        <Container
          fluid
          sx={(theme) => ({
            marginTop: 20,
            background: theme.colors.yellow,
            padding: 8,
          })}
          color="blue"
        >
          <Text align="center" color="white">
            Ricorda di confermare il tuo Account, usando il link che ti abbiamo
            mandato per mail!
          </Text>
        </Container>
      )} */}
    </div>
  );
};
