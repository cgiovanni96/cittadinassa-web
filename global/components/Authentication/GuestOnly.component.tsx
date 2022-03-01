import { useAuth } from "@global/hooks/useAuth.hook";
import { Children } from "@lib/types/Children.type";
import { Loader } from "../Utility/Loader.components";

export type GuestOnlyProps = {
  path?: string;
} & Children;

export const GuestOnly = (props: GuestOnlyProps) => {
  const { loading } = useAuth({ type: "guest", path: props.path });

  return (
    <>
      {loading && <Loader />}
      {!loading && props.children}
    </>
  );
};
