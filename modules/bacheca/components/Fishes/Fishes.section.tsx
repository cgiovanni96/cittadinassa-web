import { SimpleGrid, Title } from "@mantine/core";
import Fish from "@model/Net/Fish.model";
import { FishCard } from "./Fish.card";

export type FishSectionProps = {
  title: string;
  fishes: Fish[];
};

export const FishSection = ({ title, fishes }: FishSectionProps) => {
  return (
    <>
      <Title
        order={3}
        sx={(theme) => ({ color: "white", marginTop: theme.spacing.md })}
      >
        {title}
      </Title>

      <SimpleGrid
        cols={3}
        spacing="sm"
        sx={(theme) => ({ marginTop: theme.spacing.md })}
        breakpoints={[
          { maxWidth: "xs", cols: 1, spacing: "sm" },
          { maxWidth: "md", cols: 2, spacing: "md" },
        ]}
      >
        {fishes.map((fish) => (
          <>
            <FishCard key={fish.codename} fish={fish} />
            <FishCard key={fish.codename} fish={fish} />
            <FishCard key={fish.codename} fish={fish} />
          </>
        ))}
      </SimpleGrid>
    </>
  );
};
