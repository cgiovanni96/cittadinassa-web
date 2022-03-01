import Model from "./Base.model";

export interface User extends Model {
  name: string;
  email: string;
  profile: Profile;
  authInfo: AuthInfo;
}

export interface Profile extends Model {
  avatar?: string;
  globalRole: string;
}

export interface AuthInfo extends Model {
  confirmed: boolean;
  changinPassword: boolean;
}
