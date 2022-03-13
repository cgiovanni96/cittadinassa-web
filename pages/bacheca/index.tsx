import { Page } from "@global/components/Layout/Page.component";
import { FishList } from "@modules/bacheca/components/Fishes/Fishes.list";
import { Hero } from "@modules/bacheca/components/Hero.section";

export const Rete = () => {
  return (
    <Page>
      <Hero />
      <FishList />
    </Page>
  );
};
export default Rete;
