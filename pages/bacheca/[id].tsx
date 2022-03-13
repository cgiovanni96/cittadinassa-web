import { Page } from "@global/components/Layout/Page.component";
import { Loader } from "@global/components/Utility/Loader.components";
import { useGetParam } from "@global/hooks/useGetParam.hook";
import { useGetFish } from "@modules/bacheca/api/hooks";
import { FishHeader } from "@modules/bacheca/components/Fish/Fish.header";
import { FishTab } from "@modules/bacheca/components/Fish/FishTab";

import { headerStyles } from "@modules/bacheca/components/Fish/styles";

const Fish = () => {
  const { param: id } = useGetParam("id");
  const { data, isLoading, isSuccess } = useGetFish(id);

  const { classes } = headerStyles(data?.fish.media.color);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && data && (
        <>
          <FishHeader fish={data.fish} />
          <Page>
            <FishTab fish={data.fish} />
          </Page>
        </>
      )}
    </>
  );
};

export default Fish;
