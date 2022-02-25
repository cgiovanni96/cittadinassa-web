export default interface Model {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type BaseKeys = keyof Model;
