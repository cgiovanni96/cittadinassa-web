import { createStyles } from "@mantine/core";

/* -------------------------------------------------------------------------- */
/*                                LAYOUT STYLES                               */
/* -------------------------------------------------------------------------- */

export const layoutStyles = createStyles((theme) => ({
  app: {
    minHeight: "100vh",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
    paddingBottom: theme.spacing.lg,
  },

  pageRoot: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "100vw",
    padding: 0,
  },
  drawerLowerPortion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    padding: theme.spacing.xl,
    width: "80%",
  },
}));

/* -------------------------------------------------------------------------- */
/*                                HEADER STYLES                               */
/* -------------------------------------------------------------------------- */

export const headerStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors.dark[6],
    borderBottom: `1px solid transparent`,
    maxWidth: "100vw",
    width: "100%",
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  rightSide: {
    display: "none",
    [theme.fn.largerThan("sm")]: {
      flex: "1",
      display: "flex",
      justifyContent: "flex-end",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

/* -------------------------------------------------------------------------- */
/*                                  USER MENU                                 */
/* -------------------------------------------------------------------------- */

export const userMenuStyles = createStyles((theme) => ({
  userMenu: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

/* -------------------------------------------------------------------------- */
/*                                 NAVIGATION                                 */
/* -------------------------------------------------------------------------- */

export const navigationStyles = createStyles((theme) => ({
  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tabControl: {
    fontWeight: 500,
    height: 38,

    "&:hover": {
      backgroundColor: theme.colors.dark[5],
    },
  },

  tabControlActive: {
    borderColor: `${theme.colors.dark[7]} !important`,
  },

  drawerTabs: {
    marginTop: 20,
    width: "100%",
  },

  drawerTabControl: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  drawerTabsListWrapper: {
    width: "100%",
  },
}));
