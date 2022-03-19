import { Container, Loader as MantineLoader } from "@mantine/core";

export const Loader = () => {
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 200,
      }}
    >
      <MantineLoader variant="oval" sx={{ width: 30 }} color="blue" />
    </Container>
  );
};
