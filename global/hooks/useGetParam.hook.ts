import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useGetParam = (key: string) => {
  const { query } = useRouter();

  const [param, setParam] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!query) return;
    const queryParam = query[key];
    if (!queryParam) return;
    if (Array.isArray(queryParam)) setParam(queryParam[0]);
    else setParam(queryParam);
  }, [query]);

  return { param };
};
