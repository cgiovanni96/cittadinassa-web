import { Loader } from "@global/components/Utility/Loader.components";

import { useGetFishes } from "@modules/bacheca/api/hooks";
import { FishSection } from "./Fishes.section";

export const FishList = () => {
  const { data, isSuccess, isLoading } = useGetFishes();

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && data && data.fishes && (
        <>
          {data.fishes.events.length > 0 && (
            <FishSection title="Eventi" fishes={data.fishes.events} />
          )}

          {data.fishes.groups.length > 0 && (
            <FishSection title="Gruppi" fishes={data.fishes.groups} />
          )}

          {data.fishes.events.length > 0 && (
            <FishSection title="Progetti" fishes={data.fishes.projects} />
          )}
        </>
      )}
    </>
  );
};
