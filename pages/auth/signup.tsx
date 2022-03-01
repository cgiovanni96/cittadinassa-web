import { GuestOnly } from "@global/components/Authentication/GuestOnly.component";
import { Center, Container } from "@mantine/core";
import { SignupForm } from "@modules/auth/components/SignupForm.component";

const Signup = () => {
  return (
    <GuestOnly>
      <Center>
        <Container style={{ width: "60%" }}>
          <SignupForm />
        </Container>
      </Center>
    </GuestOnly>
  );
};

export default Signup;
