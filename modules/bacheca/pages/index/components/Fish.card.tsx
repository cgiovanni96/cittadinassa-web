import {
  Card,
  Group,
  Text,
  Spoiler,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { ArrowRight } from "tabler-icons-react";
import Image from "next/image";

import { Emoji } from "@global/components/Emoji.component";
import Fish from "@model/Net/Fish.model";
import Link from "next/link";
import { NoCoverTitle } from "@modules/bacheca/shared/ui/NoCoverTitle.element";
import { StatusBadge } from "@modules/bacheca/shared/components/StatusBadge.element";

export type FishCardProps = {
  fish: Fish;
};

export const FishCard = ({ fish }: FishCardProps) => {
  const theme = useMantineTheme();

  return (
    <Card
      shadow="sm"
      padding="lg"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Card.Section
        sx={{
          position: "relative",
          height: 120,
          marginBottom: theme.spacing.sm,
        }}
      >
        {fish.media.cover ? (
          <Image
            src={fish.media.cover.url}
            layout="fill"
            alt={fish.media.cover.name}
          />
        ) : (
          <NoCoverTitle
            title={fish.name}
            emoji={fish.media.emoji}
            color={fish.media.color}
          />
        )}
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5 }}>
        <Text weight={800} sx={{ color: fish.media.color || "white" }}>
          {fish.media.emoji && <Emoji emoji={fish.media.emoji} />}
          {fish.name}
        </Text>

        <StatusBadge status={fish.status} />
      </Group>

      <Spoiler
        maxHeight={60}
        showLabel="..."
        hideLabel="Nascondi"
        sx={{ flex: "1" }}
      >
        <Text
          size="sm"
          align="justify"
          style={{ color: theme.colors.dark[1], lineHeight: 1.5 }}
        >
          {fish.introduction}
        </Text>
      </Spoiler>

      <Group position="right">
        <Link href={`/bacheca/${fish.id}`} passHref>
          <Button
            component="a"
            variant="outline"
            size="xs"
            color="blue"
            style={{ marginTop: 14 }}
          >
            <ArrowRight size={16} />
          </Button>
        </Link>
      </Group>
    </Card>
  );
};
