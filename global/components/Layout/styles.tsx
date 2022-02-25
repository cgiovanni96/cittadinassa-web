import { createStyles } from "@mantine/core";

/* -------------------------------------------------------------------------- */
/*                                LAYOUT STYLES                               */
/* -------------------------------------------------------------------------- */

export const layoutStyles = createStyles((theme) => ({
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main: {
    flex: "1",
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
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
    marginBottom: 40,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

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
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },

  tabControlActive: {
    borderColor: `${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
    } !important`,
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
