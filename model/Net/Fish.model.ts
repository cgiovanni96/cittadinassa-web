import { UploadedFile } from "@global/types/file.type";
import Model from "../Base.model";

export enum FISH_TYPE {
  PROJECT = "project",
  EVENT = "event",
  GROUP = "group",
}

export enum FISH_STATUS {
  IDEA = "idea",
  ONGOING = "in corso",
  ENDED = "finito",
}

export enum ROLES {
  ADMIN = "Referente",
  MEMBER = "Membro",
}

export default interface Fish extends Model {
  name: string;
  codename: string;
  introduction: string;
  description?: string;
  type: FISH_TYPE;
  status: FISH_STATUS;
  extra: FishExtraInfo;
  media: FishMediaInfo;
  roles: FishToRole[];
  eventIds: string[];
}

export interface FishExtraInfo {
  drive?: string;
  discord?: string;
}

export interface FishMediaInfo {
  color?: string;
  emoji?: string;
  cover?: UploadedFile;
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
