import { PasswordInput, TextInput, Button, Text } from "@mantine/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, Mail, Lock } from "tabler-icons-react";

import { LoginDto } from "@auth/api/auth.dto";
import { useLogin } from "@auth/api/hooks";
import { useNotifications } from "@mantine/notifications";
import { useRouter } from "next/router";
import { tokenStore } from "@global/store/token.store";
import { useQueryClient } from "react-query";

import { LOGIN } from "../pages/login.page";

const schema = z.object({
  email: z.string().email({ message: LOGIN.MESSAGES.WRONG_EMAIL }),
  password: z.string(),
});

const iconDefaults = { size: 20, strokeWidth: 1 };

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDto>({ resolver: zodResolver(schema) });

  const client = useQueryClient();

  const { setToken } = tokenStore();
  const { mutate, isError, isSuccess, isLoading, data } = useLogin();

  const onSubmit = async (loginData: LoginDto) => {
    mutate(loginData);
  };

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
        autoClose: 5000,
        title: "Errore nell'accesso",
        message: "Controlla le credenziale",
        color: "red",
        icon: <X color="white" />,
      });
    }
  }, [isError]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        variant="default"
        id="0"
        icon={<Mail {...iconDefaults} />}
        placeholder={LOGIN.FIELDS.EMAIL}
        label={LOGIN.FIELDS.EMAIL}
        required
        {...register("email")}
      />
      <Text color="red">{errors.email?.message}</Text>

      <PasswordInput
        variant="default"
        id="1"
        icon={<Lock {...iconDefaults} />}
        placeholder={LOGIN.FIELDS.PASSWORD}
        label={LOGIN.FIELDS.PASSWORD}
        required
        {...register("password")}
      />
      <Text color="red">{errors.password?.message}</Text>
      {isError && <Text color="red">{LOGIN.MESSAGES.WRONG_CREDENTIALS}</Text>}

      <Button type="submit" style={{ marginTop: "2rem" }} loading={isLoading}>
        {LOGIN.FIELDS.CTA}
      </Button>
    </form>
  );
};
