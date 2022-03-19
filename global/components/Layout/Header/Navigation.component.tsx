import { useState, useEffect } from "react";
import { Container, Tabs } from "@mantine/core";
import { PAGES } from "data/global.data";
import { useRouter } from "next/router";
import { navigationStyles } from "../styles";

const iconDefaults = { strokeWidth: 1 };

const items = PAGES.map((page) => (
  <Tabs.Tab
    label={page.name}
    icon={<page.Icon {...iconDefaults} />}
    key={page.name.toLowerCase()}
  />
));

type NavigationProps = { drawer?: boolean; onClick?: () => void };

export const Navigation = ({ drawer, onClick }: NavigationProps) => {
  const [active, setActive] = useState(0);
  const { classes } = navigationStyles();
  const router = useRouter();

  useEffect(() => {
    const slashIdx = router.pathname.indexOf("/", 1);
    const base = router.pathname.slice(
      0,
      slashIdx > 0 ? slashIdx : router.pathname.length
    );
    console.log(base);

    const idx = PAGES.findIndex((page) => page.path === base);
    setActive(idx + 1);
  }, [router.pathname]);

  return (
    <Container>
      <Tabs
        active={active}
        variant={drawer ? "pills" : "outline"}
        orientation={drawer ? "vertical" : "horizontal"}
        classNames={{
          root: drawer ? classes.drawerTabs : classes.tabs,
          tabsListWrapper: drawer
            ? classes.drawerTabsListWrapper
            : classes.tabsList,
          tabControl: drawer ? classes.drawerTabControl : classes.tabControl,
          tabActive: classes.tabControlActive,
        }}
        onTabChange={(tabIdx) => {
          router.push(PAGES[tabIdx - 1].path);
          onClick && onClick();
        }}
      >
        <Tabs.Tab label="empty" sx={{ display: "none" }} />
        {items}
      </Tabs>
    </Container>
  );
};
