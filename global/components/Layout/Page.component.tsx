import { Children } from "@lib/types/Children.type";
import { Center, Container } from "@mantine/core";

export const Page = (props: Children) => {
  return (
    <Center>
      <Container style={{ width: "60%" }}>{props.children}</Container>
    </Center>
  );
};
