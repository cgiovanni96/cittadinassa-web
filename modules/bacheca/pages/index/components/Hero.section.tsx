import { Text, Title } from "@mantine/core";
import { useCurrent } from "@modules/auth/api/hooks";
import { GLOBAL_ROLES } from "data/roles.data";
import Link from "next/link";
import { Anchor } from "tabler-icons-react";
import { DATA } from "../index.data";

export const Hero = () => {
  const { data } = useCurrent();

  return (
    <>
      <Text align="right">
        <Title
          order={1}
          color="blue"
          sx={(theme) => ({ color: theme.colors.gray[0], fontSize: 50 })}
        >
          <Anchor size={40} /> {DATA.HERO.TITLE}
        </Title>
        <Title order={2}> {DATA.HERO.SUBTITLE}</Title>
        {DATA.HERO.DESCRIPTION}
      </Text>
      <Text align="right">
        {data && data.user.profile.globalRole === GLOBAL_ROLES.ADMIN && (
          <Link href="/bacheca/nuovo">{DATA.HERO.ADD}</Link>
        )}
      </Text>
    </>
  );
};
