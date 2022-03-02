import { useGoLogin } from "@global/hooks/useGoLogin.hook";
import { useCurrent } from "@modules/auth/api/hooks";

const Settings = () => {
  const { data } = useCurrent();
  useGoLogin();

  return <>{JSON.stringify(data?.user)}</>;
};

export default Settings;
