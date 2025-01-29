import {
  MenuSection,
  ShowcaseBanner,
  OrderSteps,
  ReservationSection,
  CustomerFeedback,
  AppDownload,
} from "../../components";

const Home = () => {
  return (
    <div className="flex w-full h-auto flex-col items-center justify-center">
      <ShowcaseBanner />
      <OrderSteps />
      <MenuSection />
      <ReservationSection />
      <CustomerFeedback />
      <AppDownload />
    </div>
  );
};

export default Home;
