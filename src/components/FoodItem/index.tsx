import { FoodItem } from "../../../types";
import { motion } from "framer-motion";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";

export const SingleFoodItem = ({
  item,
  col,
  admin,
}: {
  item: FoodItem;
  col?: boolean;
  admin?: boolean;
}) => {
  const { name, price, imageURL, availability_status } = item;

  const generateStars = () => {
    return Array(5)
      .fill(0)
      .map((_, i) => <span key={i}>⭐</span>); // Simulating a 5-star rating
  };

  return (
    <motion.div
      whileTap={{ rotate: [0, -1, 1, -1, 0] }}
      className="w-full md:w-[320px] bg-white shadow-md rounded-lg p-4"
    >
      <div className="relative w-full h-40 flex items-center justify-center">
        <img
          src={imageURL}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex justify-between items-center mt-3">
        <button className="p-2 bg-gray-100 rounded-full">
          <FaShoppingCart />
        </button>
        <button className="p-2 bg-gray-100 rounded-full">
          <FaHeart />
        </button>
        <button className="p-2 bg-gray-100 rounded-full">
          <FaEye />
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <span
          className={`text-sm ${
            availability_status ? "text-green-600" : "text-red-600"
          }`}
        >
          {availability_status ? "AVAILABLE" : "NOT AVAILABLE"}
        </span>
        <div className="flex">{generateStars()}</div>
        <p className="font-bold">{name}</p>
        <p className="text-red-600">₦{price}</p>
      </div>
    </motion.div>
  );
};

export default SingleFoodItem;
