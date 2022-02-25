import { Button, Group } from "@mantine/core";
import Link from "next/link";

export const ActionMenu = () => {
  return (
    <Group>
      <Link href="/auth/login" passHref>
        <Button component="a">Accedi</Button>
      </Link>

      <Link href="/auth/signup" passHref>
        <Button component="a" variant="outline">
          Registrati
        </Button>
      </Link>
    </Group>
  );
};
