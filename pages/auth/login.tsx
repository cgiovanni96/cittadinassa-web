import { Box, Center, Container, Text } from "@mantine/core";
import Image from "next/image";

import { useCurrent } from "@modules/auth/api/hooks";
import { LoginForm } from "@modules/auth/components/LoginForm.component";

const Error = () => {
  return (
    <Box>
      <Center>
        <Box sx={{ width: "80%", height: 400, position: "relative" }}>
          <Image src="/jelly.png" alt="Nassano Pacco" layout="fill" />
        </Box>
      </Center>
      <Text align="center" sx={{ fontSize: 25 }} variant="gradient">
        WEEEE sei gia loggato
      </Text>
      <Text align="center" sx={{ fontSize: 15 }} variant="gradient">
        Pacco
      </Text>
    </Box>
  );
};

const Login = () => {
  const { isSuccess } = useCurrent();

  console.log("weeee", isSuccess);

  return (
    <Center>
      <Container style={{ width: "40%" }}>
        {isSuccess && <Error />}
        {!isSuccess && <LoginForm />}
      </Container>
    </Center>
  );
};

export default Login;
