import { Center, Box, Text, Button, Container } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";

export type ErrorComponentProps = {
  header: string;
  subHeader?: string;
};

export const Error = (props: ErrorComponentProps) => {
  const { back } = useRouter();

  return (
    <Center>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", height: 300, position: "relative" }}>
          <Center>
            <Image
              src="/surr.png"
              alt="Nassano Pacco"
              width="300"
              height="300"
            />
          </Center>
        </Box>
        <Text align="center" sx={{ fontSize: 40 }} color="red">
          {props.header}
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text align="center" sx={{ fontSize: 25 }}>
            {props.subHeader}
          </Text>
          <Button
            sx={{ marginLeft: "auto", marginTop: 6 }}
            color="red"
            onClick={() => back()}
          >
            Torna Indietro
          </Button>
        </Box>
      </Container>
    </Center>
  );
};
