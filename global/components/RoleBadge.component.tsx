import { Badge } from "@mantine/core";
import { GLOBAL_ROLES } from "data/roles.data";

export type RoleBadgeProps = {
  role: string;
};

export const RoleBadge = ({ role }: RoleBadgeProps) => {
  return (
    <Badge
      variant="filled"
      color={
        role === GLOBAL_ROLES.ADMIN
          ? "red"
          : role === GLOBAL_ROLES.OPERATION
          ? "yellow"
          : "blue"
      }
    >
      {role}
    </Badge>
  );
};
