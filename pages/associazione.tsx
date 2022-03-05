import { Button } from "@mantine/core";
import { useState } from "react";

const Associazione = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Apri</Button>
      Associazione
    </>
  );
};

export default Associazione;
