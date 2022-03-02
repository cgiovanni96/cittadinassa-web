import { tokenStore } from "@global/store/token.store";
import { UnstyledButton, Group, Avatar, Menu, Text } from "@mantine/core";
import { useLogout } from "@modules/auth/api/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { ChevronDown, Settings, Logout } from "tabler-icons-react";
import { userMenuStyles } from "../styles";

interface UserMenuProps {
  user: { name: string };
  onClick?: () => void;
}

export const UserMenu = ({ user, onClick }: UserMenuProps) => {
  const { classes, cx } = userMenuStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const { token, setToken } = tokenStore();
  const mutation = useLogout();
  const client = useQueryClient();
  const router = useRouter();

  const clicking = () => {
    onClick && onClick();
  };

  useEffect(() => {
    if (mutation.isSuccess && token !== "") {
      setToken("");
      client.invalidateQueries("currentUser");
    }
  }, [mutation, setToken, token, client]);

  return (
    <Menu
      size={260}
      placement="end"
      transition="pop-top-right"
      className={classes.userMenu}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      control={
        <UnstyledButton
          className={cx(classes.user, {
            [classes.userActive]: userMenuOpened,
          })}
        >
          <Group spacing={7}>
            <Avatar alt={user.name} radius="xl" size={20} src={undefined} />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {user.name}
            </Text>
            <ChevronDown size={12} />
          </Group>
        </UnstyledButton>
      }
    >
      <Menu.Label>Impostazioni</Menu.Label>
      <Menu.Item
        icon={<Settings size={14} />}
        onClick={() => {
          router.push("/user/settings");
          clicking();
        }}
      >
        Impostazioni
      </Menu.Item>
      <Menu.Item
        color="red"
        icon={<Logout size={14} />}
        onClick={() => {
          mutation.mutate();
          clicking();
        }}
      >
        Esci
      </Menu.Item>
    </Menu>
  );
};
