import { Page } from "@global/components/Layout/Page.component";
import { FishList } from "@modules/bacheca/pages/index/components/Fishes.list";
import { Hero } from "@modules/bacheca/pages/index/components/Hero.section";

export const Rete = () => {
  return (
    <Page>
      <Hero />
      <FishList />
    </Page>
  );
};
export default Rete;
