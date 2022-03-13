import { Group, Text } from "@mantine/core";
import React from "react";

export type InfoGroupElementProps = {
  description: string;
  element: React.ReactNode;
};

export const InfoGroupElement = ({
  description,
  element,
}: InfoGroupElementProps) => {
  return (
    <Group
      spacing="xl"
      sx={(theme) => ({ marginTop: theme.spacing.xs / 2, gap: 0 })}
    >
      <Text sx={(theme) => ({ color: theme.colors.gray[7], width: 50 })}>
        {description}
      </Text>
      <Text sx={{ color: "white" }}>{element}</Text>
    </Group>
  );
};
