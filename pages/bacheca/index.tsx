import { Page } from "@global/components/Layout/Page.component";
import { FishList } from "@modules/bacheca/components/FishList.component";
import { Hero } from "@modules/bacheca/components/Hero.component";

export const Rete = () => {
  return (
    <Page>
      <Hero />
      <FishList />
    </Page>
  );
};

export default Rete;
