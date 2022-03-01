import { Input } from "@global/components/Input.component";
import { tokenStore } from "@global/store/token.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { calls } from "data/api.data";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { z } from "zod";
import { CreateUserDto } from "../api/auth.dto";
import { useCreateUser } from "../api/hooks";

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const SignupForm = () => {
  const form = useForm<CreateUserDto>({ resolver: zodResolver(signupSchema) });
  const mutation = useCreateUser();

  const onSubmit = form.handleSubmit(async (data: CreateUserDto) => {
    mutation.mutate(data);
  });

  const { setToken } = tokenStore();
  const client = useQueryClient();

  useEffect(() => {
    if (mutation.isSuccess) {
      setToken(mutation.data.token);
      client.invalidateQueries(calls.currentUser);
    }
  }, [mutation.status]);

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        variant="default"
        type="text"
        placeholder="Nome dell'account"
        label="name"
        required
        {...form.register("name")}
      />
      <TextInput
        variant="default"
        type="text"
        placeholder="Inserisci l'indirizzo mail"
        label="Email"
        required
        {...form.register("email")}
      />
      <PasswordInput
        variant="default"
        type="password"
        placeholder="password"
        label="password"
        required
        {...form.register("password")}
      />

      <Button
        type="submit"
        style={{ marginTop: "2rem" }}
        loading={mutation.isLoading}
      >
        Registrati
      </Button>
    </form>
  );
};
