import { Home, Social, Anchor, Icon } from "tabler-icons-react";

export type Page = {
  path: string;
  name: string;
  Icon: Icon;
};
export const PAGES: Page[] = [
  { path: "/", name: "Home", Icon: Home },
  { path: "/associazione", name: "Associazione", Icon: Social },
  { path: "/bacheca", name: "Bacheca", Icon: Anchor },
];
