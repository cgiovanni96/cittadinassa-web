import { Home, Social, Seeding, Icon } from "tabler-icons-react";

export type Page = {
  path: string;
  name: string;
  Icon: Icon;
};
export const PAGES: Page[] = [
  { path: "/", name: "Home", Icon: Home },
  { path: "/associazione", name: "Associazione", Icon: Social },
  { path: "/rete", name: "Rete", Icon: Seeding },
];
