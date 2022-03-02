import { Box, Center, Text } from "@mantine/core";
import Image from "next/image";
import { CONFIRMED } from "../pages/confirm.page";

export const UserConfirmed = () => {
  return (
    <Center>
      <Box>
        <Box sx={{ width: "100%", height: 300, position: "relative" }}>
          <Center>
            <Image
              src="/surr-2.png"
              alt="Nassano Pacco"
              width="300"
              height="300"
            />
          </Center>
        </Box>
        <Text align="center" sx={{ fontSize: 40 }} color="blue">
          {CONFIRMED.HEADER}
        </Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text align="center" sx={{ fontSize: 25 }}>
            {CONFIRMED.SUB}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
