import { Badge } from "@mantine/core";
import { FISH_TYPE } from "@model/Net/Fish.model";

export type TypeBadgeElementProps = {
  type: FISH_TYPE;
};

export const TypeBadgeElement = ({ type }: TypeBadgeElementProps) => {
  return (
    <Badge variant="outline" color="gray" leftSection={<>#</>}>
      {type}
    </Badge>
  );
};
