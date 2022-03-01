import { useCurrent } from "@modules/auth/api/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

export type UseAuth = {
  type: "guest" | "user";
  path?: string;
};

export const useAuth = ({ type, path = "/" }: UseAuth) => {
  const { data, status, isSuccess, isLoading, isError } = useCurrent();
  const { push } = useRouter();

  useEffect(() => {
    if (type === "user" && isError) push(path);
    if (type === "guest" && isSuccess && data?.user) push(path);
  }, [status]);

  return { loading: isLoading };
};
