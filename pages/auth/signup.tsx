import { GuestOnly } from "@global/components/Authentication/GuestOnly.component";
import { Page } from "@global/components/Layout/Page.component";

import { SignupForm } from "@modules/auth/components/SignupForm.component";

const Signup = () => {
  return (
    <GuestOnly>
      <Page>
        <SignupForm />
      </Page>
    </GuestOnly>
  );
};

export default Signup;
