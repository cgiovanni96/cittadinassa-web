import React, { useEffect, useState } from "react";
import { Container, Group, Tabs, Burger, Text } from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";

import { headerStyles } from "../styles";
import { UserMenu } from "./UserMenu.component";
import { useCurrent } from "../../../../modules/auth/api/hooks";
import { ActionMenu } from "./ActionMenu.component";
import { PAGES } from "data/global.data";
import { useRouter } from "next/router";
import Link from "next/link";

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
    <Tabs.Tab label={page.name} key={page.name.toLowerCase()} />
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
    </div>
  );
};
