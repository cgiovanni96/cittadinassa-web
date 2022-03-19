import { Page } from "@global/components/Layout/Page.component";
import { Loader } from "@global/components/Utility/Loader.components";
import { useGetParam } from "@global/hooks/useGetParam.hook";
import { useGetFish } from "@modules/bacheca/api/hooks";
import { FishHeader } from "@modules/bacheca/pages/single/ui/Fish.header";
import { FishSection } from "@modules/bacheca/pages/single/ui/Fish.section";

const Fish = () => {
  const { param: id } = useGetParam("id");
  const { data, isLoading, isSuccess } = useGetFish(id);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && data && (
        <>
          <FishHeader fish={data.fish} />
          <Page>
            <FishSection fish={data.fish} />
          </Page>
        </>
      )}
    </>
  );
};

export default Fish;
