import { useGetFishes } from "../api/hooks";
import Fish from "@model/Net/Fish.model";
import {
  Badge,
  Button,
  Card,
  Group,
  SimpleGrid,
  Spoiler,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

export type FishCardProps = {
  fish: Fish;
};

const FishCard = ({ fish }: FishCardProps) => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" padding="lg">
      <Group position="apart" style={{ marginBottom: 5 }}>
        <Text weight={500} sx={{ color: "white" }}>
          {fish.name}
        </Text>
        <Badge color="pink" variant="light">
          In Corso
        </Badge>
      </Group>

      <Spoiler maxHeight={60} showLabel="..." hideLabel="Nascondi">
        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {fish.description ||
            "With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}
        </Text>
      </Spoiler>

      <Button variant="outline" color="blue" style={{ marginTop: 14 }}>
        Leggi di piu
      </Button>
    </Card>
  );
};

export const FishList = () => {
  const { data, isSuccess, isLoading } = useGetFishes();

  return (
    <>
      <Title order={3} sx={{ color: "white" }}>
        I Gruppi
      </Title>

      {data && (
        <SimpleGrid
          cols={3}
          spacing="lg"
          sx={(theme) => ({ marginTop: theme.spacing.md })}
          breakpoints={[{ maxWidth: "xs", cols: 1, spacing: "sm" }]}
        >
          {/* {data &&
          data.fishes.groups.map((g) => <FishCard key={g.id} fish={g} />)} */}

          <FishCard fish={data.fishes.groups[0]} />
          <FishCard fish={data.fishes.groups[0]} />
          <FishCard fish={data.fishes.groups[0]} />
          <FishCard fish={data.fishes.groups[0]} />
        </SimpleGrid>
      )}
    </>
  );
};
