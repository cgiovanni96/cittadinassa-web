import { Children } from "@lib/types/Children.type";
import { Center, Container } from "@mantine/core";

export type PageProps = {
  width?: string;
} & Children;

export const Page = (props: PageProps) => {
  return (
    <Center>
      <Container style={{ width: props.width ? props.width : "100%" }}>
        {props.children}
      </Container>
    </Center>
  );
};
