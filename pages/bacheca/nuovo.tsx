import { Page } from "@global/components/Layout/Page.component";
import { FishForm } from "@modules/bacheca/pages/new/components/Fish.form";
import { UploadCover } from "@modules/bacheca/pages/new/components/UploadCover.picker";
import { useState } from "react";

const New = () => {
  const [cover, setCover] = useState<File | undefined>(undefined);

  return (
    <Page>
      <UploadCover setInfo={setCover} />
      <FishForm cover={cover} />
    </Page>
  );
};

export default New;
