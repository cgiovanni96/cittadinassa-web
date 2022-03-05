import { Text, Title } from "@mantine/core";
import { useCurrent } from "@modules/auth/api/hooks";
import { GLOBAL_ROLES } from "data/roles.data";
import Link from "next/link";
import { Anchor } from "tabler-icons-react";

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
          <Anchor size={40} /> Bacheca
        </Title>
        <Title order={2}> Cosè la bacheca della Nassa?</Title>
        La bacheca è lo showroom del nostro sito: qui potete vedere tutte le
        attività che stiamo organizzando
      </Text>
      <Text align="right">
        {data && data.user.profile.globalRole === GLOBAL_ROLES.ADMIN && (
          <Link href="/bacheca/nuovo">Aggiungi</Link>
        )}
      </Text>
    </>
  );
};
