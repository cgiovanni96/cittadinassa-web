import { Emoji } from "@global/components/Emoji.component";
import { Container, Text, Group, Title, createStyles } from "@mantine/core";
import Fish from "@model/Net/Fish.model";
import { InfoGroupElement } from "../FishElements/InfoGroup.element";
import { StatusBadge } from "../FishElements/StatusBadge.element";
import { TypeBadgeElement } from "../FishElements/TypeBadge.element";
import { headerStyles } from "./styles";

export type FishHeaderProps = {
  fish: Fish;
};

export const FishHeader = ({ fish }: FishHeaderProps) => {
  const { classes } = headerStyles(fish.media.color);

  return (
    <>
      <Container className={classes.header}>
        <Container>
          <Group spacing="xs">
            {fish.media.emoji && (
              <Emoji emoji={fish.media.emoji} className={classes.headerEmoji} />
            )}
            <Title sx={{ color: "white" }}>{fish.name}</Title>
          </Group>

          <Text sx={(theme) => ({ width: "75%", color: theme.colors.gray[7] })}>
            {fish.introduction}
          </Text>

          <InfoGroupElement
            description="Tipo"
            element={<TypeBadgeElement type={fish.type} />}
          />

          <InfoGroupElement
            description="Stato"
            element={<StatusBadge status={fish.status} />}
          />
        </Container>
      </Container>
      <span className={classes.divider}></span>
    </>
  );
};
