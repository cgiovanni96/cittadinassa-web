import { Page } from "@global/components/Layout/Page.component";
import { Error } from "@global/components/Utility/Error.component";
import { Loader } from "@global/components/Utility/Loader.components";

import { useCurrent } from "@modules/auth/api/hooks";
import { LoginForm } from "@modules/auth/components/LoginForm.component";
import { LOGIN } from "@modules/auth/pages/login.page";

const Login = () => {
  const { isSuccess: isAlreadyLogged, isLoading } = useCurrent();
  return (
    <Page>
      {isAlreadyLogged && (
        <Error header={LOGIN.ERROR.HEADER} subHeader={LOGIN.ERROR.SUB} />
      )}
      {isLoading && <Loader />}
      {!isLoading && !isAlreadyLogged && <LoginForm />}
    </Page>
  );
};

export default Login;
