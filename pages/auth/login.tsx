import { Error } from "@global/components/Utility/Error.component";
import { Loader } from "@global/components/Utility/Loader.components";
import { Center, Container } from "@mantine/core";

import { useCurrent } from "@modules/auth/api/hooks";
import { LoginForm } from "@modules/auth/components/LoginForm.component";

const Login = () => {
  const { isSuccess: isAlreadyLogged, isLoading } = useCurrent();
  return (
    <Center>
      <Container style={{ width: "60%" }}>
        {isAlreadyLogged && (
          <Error header="SEI GIA LOGGATO" subHeader="Cosa ci fai qui?" />
        )}
        {isLoading && <Loader />}
        {!isLoading && !isAlreadyLogged && <LoginForm />}
      </Container>
    </Center>
  );
};

export default Login;
