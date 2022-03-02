import { useEffect } from "react";

import { Error } from "@global/components/Utility/Error.component";
import { Loader } from "@global/components/Utility/Loader.components";

import { useConfirmUser } from "@modules/auth/api/hooks";
import { ERROR } from "@modules/auth/pages/confirm.page";
import { UserConfirmed } from "@modules/auth/components/UserConfirmed.component";
import { useGetParam } from "@global/hooks/useGetParam.hook";

const Confirm = () => {
  const { mutate, isSuccess, isError, isLoading } = useConfirmUser();
  const { param: link } = useGetParam("link");

  useEffect(() => {
    link && mutate({ link });
  }, [link]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <Error header={ERROR.HEADER} subHeader={ERROR.SUB} />}
      {isSuccess && <UserConfirmed />}
    </>
  );
};

export default Confirm;
