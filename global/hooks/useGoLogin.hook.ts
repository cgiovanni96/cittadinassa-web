import { useCurrent } from "@modules/auth/api/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useGoLogin = () => {
  const { data: user } = useCurrent();
  const { push } = useRouter();

  useEffect(() => {
    if (!user) push("/auth/login");
  }, []);
};
