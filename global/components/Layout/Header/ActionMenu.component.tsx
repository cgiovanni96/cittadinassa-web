import { Button, Group } from "@mantine/core";
import Link from "next/link";

export type ActionMenuProps = {
  onClick?: () => void;
};

export const ActionMenu = ({ onClick }: ActionMenuProps) => {
  const clicking = () => {
    onClick && onClick();
  };

  return (
    <Group>
      <Link href="/auth/login" passHref>
        <Button component="a" onClick={() => clicking()}>
          Accedi
        </Button>
      </Link>

      <Link href="/auth/signup" passHref>
        <Button component="a" variant="outline" onClick={() => clicking()}>
          Registrati
        </Button>
      </Link>
    </Group>
  );
};
