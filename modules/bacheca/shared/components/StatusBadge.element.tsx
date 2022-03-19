import { Badge, MantineColor } from "@mantine/core";
import { FISH_STATUS } from "@model/Net/Fish.model";
import { useEffect, useState } from "react";

export type StatusBadgeProps = {
  status: FISH_STATUS;
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const [color, setColor] = useState<MantineColor>();

  useEffect(() => {
    setColor(
      status === FISH_STATUS.IDEA
        ? "indigo"
        : status === FISH_STATUS.ONGOING
        ? "green"
        : "red"
    );
  }, []);

  return (
    <Badge color={color} variant="light">
      {status}
    </Badge>
  );
};
