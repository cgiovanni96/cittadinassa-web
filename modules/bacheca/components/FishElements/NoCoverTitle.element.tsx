import { Emoji } from "@global/components/Emoji.component";
import {
  Group,
  Title,
  Container,
  useMantineTheme,
  createStyles,
} from "@mantine/core";

export type NoCoverTitleProps = {
  emoji?: string;
  color?: string;
  title: string;
};

export const NoCoverTitle = ({ emoji, color, title }: NoCoverTitleProps) => {
  const theme = useMantineTheme();

  const { classes } = titleBoxStyles(color);

  return (
    <Container className={classes.root}>
      <Group spacing="xs">
        {emoji && <Emoji emoji={emoji} size={theme.fontSizes.xl} />}
        <Title sx={{ color: "white" }}>{title}</Title>
      </Group>
    </Container>
  );
};

const titleBoxStyles = createStyles((theme, color: string | undefined) => ({
  root: {
    width: "100%",
    height: "100%",
    background: color || theme.colors.blue,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
