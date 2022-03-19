import { Loader } from "@global/components/Utility/Loader.components";

import { useGetFishes } from "@modules/bacheca/api/hooks";
import { DATA } from "../index.data";
import { FishSection } from "../ui/Fishes.section";

export const FishList = () => {
  const { data, isSuccess, isLoading } = useGetFishes();

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && data && data.fishes && (
        <>
          {data.fishes.events.length > 0 && (
            <FishSection title={DATA.LIST.EVENTS} fishes={data.fishes.events} />
          )}

          {data.fishes.groups.length > 0 && (
            <FishSection title={DATA.LIST.GROUPS} fishes={data.fishes.groups} />
          )}

          {data.fishes.events.length > 0 && (
            <FishSection
              title={DATA.LIST.PROJECTS}
              fishes={data.fishes.projects}
            />
          )}
        </>
      )}
    </>
  );
};
