import Model from "./Base.model";

export interface User extends Model {
  name: string;
  email: string;
  profile: Profile;
}

export interface Profile extends Model {
  avatar?: string;
  globalRole: string;
}
