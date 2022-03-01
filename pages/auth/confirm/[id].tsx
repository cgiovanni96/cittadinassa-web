import { Error } from "@global/components/Utility/Error.component";
import { Loader } from "@global/components/Utility/Loader.components";
import { Box, Center, Text } from "@mantine/core";
import { useConfirmUser } from "@modules/auth/api/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Confirm = () => {
  const { query } = useRouter();
  const { mutate, isSuccess, isError, isLoading } = useConfirmUser();

  useEffect(() => {
    if (!query || !query.id) return;

    let link: string;

    if (Array.isArray(query.id)) link = query.id[0];
    else link = query.id;

    mutate({ link });
  }, [query]);

  const Confirmed = () => {
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
            Email Confermata
          </Text>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text align="center" sx={{ fontSize: 25 }}>
              Il tuo indirizzo email è stato confermato
            </Text>
          </Box>
        </Box>
      </Center>
    );
  };

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <Error
          header="Qualcosa è andato storto"
          subHeader="Controlla che il link usato sia corretto"
        />
      )}
      {isSuccess && <Confirmed />}
    </>
  );
};

export default Confirm;
