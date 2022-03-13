import { Children } from "@lib/types/Children.type";
import { Center, Container } from "@mantine/core";

export type PageProps = {
  width?: string;
} & Children;

export const Page = (props: PageProps) => {
  return (
    <Center>
      <Container
        sx={(theme) => ({
          width: props.width ? props.width : "100%",
          padding: theme.spacing.xs,
        })}
      >
        {props.children}
      </Container>
    </Center>
  );
};
