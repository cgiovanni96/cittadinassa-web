import { Container, Drawer, Text } from "@mantine/core";
import { useCurrent } from "@modules/auth/api/hooks";
import { ActionMenu } from "./ActionMenu.component";
import { Navigation } from "./Navigation.component";
import { UserMenu } from "./UserMenu.component";

export type SidebarProps = {
  opened: boolean;
  close: () => void;
};

export const Sidebar = ({ opened, close }: SidebarProps) => {
  const { data } = useCurrent();

  return (
    <Drawer
      opened={opened}
      onClose={() => close()}
      size="md"
      padding="xl"
      position="right"
      title="Menu"
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!data?.user && <ActionMenu onClick={close} />}
        {data?.user && <UserMenu user={data.user} onClick={close} />}
      </Container>
      <Navigation drawer={true} onClick={close} />
      <Text>Téma</Text>
    </Drawer>
  );
};
