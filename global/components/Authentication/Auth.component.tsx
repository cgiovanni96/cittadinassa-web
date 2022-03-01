import { useAuth } from "@global/hooks/useAuth.hook";
import { Children } from "@lib/types/Children.type";
import { Loader } from "../Utility/Loader.components";

export type AuthProps = {
  path?: string;
} & Children;

export const Auth = (props: AuthProps) => {
  const { loading } = useAuth({ type: "user" });

  return (
    <>
      {loading && <Loader />}
      {!loading && props.children}
    </>
  );
};
