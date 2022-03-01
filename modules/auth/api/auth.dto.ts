export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
};

export type ConfirmUserDto = {
  link: string;
};
