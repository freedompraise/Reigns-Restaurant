import { MenuSection, ShowcaseBanner, OrderSteps } from "../../components";

const Home = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <ShowcaseBanner />
      <OrderSteps />
      <MenuSection />
    </div>
  );
};

export default Home;
