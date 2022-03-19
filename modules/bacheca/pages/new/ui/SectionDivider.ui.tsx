import { Divider, Title, TitleOrder } from "@mantine/core";

export type SectionDividerProps = {
  title: string;
  order: TitleOrder;
};

export const SectionDivider = ({ title, order }: SectionDividerProps) => {
  return (
    <Divider
      sx={(theme) => ({
        marginBottom: theme.spacing.xl,
        marginTop: theme.spacing.xl,
      })}
      labelPosition="center"
      label={
        <>
          <Title order={order} sx={{ color: "white" }}>
            {title}
          </Title>
        </>
      }
    />
  );
};
