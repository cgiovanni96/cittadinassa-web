import Model from "../Base.model";

export enum FISH_TYPE {
  PROJECT = "project",
  EVENT = "event",
  GROUP = "group",
}

export enum ROLES {
  ADMIN = "Referente",
  MEMBER = "Membro",
}

export default interface Fish extends Model {
  name: string;
  codename: string;
  description?: string;
  type: FISH_TYPE;
  extra: FishExtraInfo;
  roles: FishToRole[];
  eventIds: string[];
}

export interface FishExtraInfo {
  drive: string;
  discord: string;
}

export interface FishToRole {
  role: Role;
  userIds: string[];
}

export interface Role {
  name: string;
  type: ROLES;
}

export interface Project extends Fish {}
export interface Event extends Fish {}
export interface Group extends Fish {}
