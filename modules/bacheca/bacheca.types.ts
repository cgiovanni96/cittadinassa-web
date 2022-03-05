import { Project, Event, Group } from "@model/Net/Fish.model";

export type GroupedFishes = {
  projects: Project[];
  events: Event[];
  groups: Group[];
};
