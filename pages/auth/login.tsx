import {
  Center,
  Container,
  PasswordInput,
  TextInput,
  Button,
  Text,
} from "@mantine/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "tabler-icons-react";

import { LoginDto } from "@auth/api/auth.type";
import { useLogin } from "@auth/api/hooks";
import { useNotifications } from "@mantine/notifications";
import { useRouter } from "next/router";
import { tokenStore } from "@global/store/token.store";
import { useQueryClient } from "react-query";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Devi inserire un indirizzo email valido" }),
  password: z.string(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDto>({ resolver: zodResolver(schema) });

  const client = useQueryClient();

  const { setToken } = tokenStore();
  const { mutate, isError, isSuccess, isLoading, data } = useLogin();

  const onSubmit = async (loginData: LoginDto) => mutate(loginData);

  const notifications = useNotifications();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess && data) {
      setToken(data.token);
      client.invalidateQueries("currentUser");
      router.push("/");
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError) {
      reset();

      notifications.showNotification({
        id: "login-error",
        autoClose: 3000,
        title: "Errore nell'accesso",
        message: "Controlla le credenziale",
        color: "red",
        icon: <X color="white" />,
      });
    }
  }, [isError]);

  return (
    <Center>
      <Container style={{ width: "40%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            id="0"
            placeholder="Email"
            label="Email"
            required
            {...register("email")}
          />
          <Text color="red">{errors.email?.message}</Text>

          <PasswordInput
            id="1"
            placeholder="Password"
            label="Password"
            required
            {...register("password")}
          />
          <Text color="red">{errors.password?.message}</Text>
          {isError && <Text color="red">Email o password sbagliate</Text>}

          <Button
            type="submit"
            style={{ marginTop: "2rem" }}
            loading={isLoading}
          >
            Accedi
          </Button>
        </form>
      </Container>
    </Center>
  );
};

export default Login;
