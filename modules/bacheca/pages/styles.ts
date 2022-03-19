import { createStyles } from "@mantine/core";

export const headerStyles = createStyles(
  (theme, color: string | undefined) => ({
    header: {
      maxWidth: "100vw",
      width: "100%",
      background: theme.colors.dark[8],
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },

    divider: {
      background: color,
      height: 2,
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.fn.largerThan("md")]: {
        width: 960,
      },
    },

    headerEmoji: {
      fontSize: theme.fontSizes.xl,
    },
  })
);
