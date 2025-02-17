import { BikeDelivery } from "../Assets";
import { motion } from "framer-motion";
const Left = () => {
  const handleOrder = () => {
    const reservationSection = document.getElementById("reservation");
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
      <div className="flex items-center gap-2 justify-center bg-red-100 px-4 py-1 rounded-full">
        <p className="text-base text-red-500 font-bold">Bike Delivery</p>
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
          <img
            src={BikeDelivery}
            alt="delivery"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <p className="text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor">
        Where Culinary Excellence Meets Entertainment in
        <span className="text-red-600 text-[2.5rem] lg:text-[4.6rem]">
          {" "}
          Benin City
        </span>
      </p>
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Enjoy our hot dishes, refreshing soft drinks, and delightful desserts in
        a lively atmosphere
      </p>
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-br from-red-400 to-red-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          onClick={handleOrder}
        >
          Reservation
        </motion.button>
      </div>
    </div>
  );
};

export default Left;
