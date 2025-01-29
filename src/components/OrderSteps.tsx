import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "PLACE ORDER",
    description: "Select from our wide range of delicious meals.",
  },
  {
    number: "02",
    title: "CONFIRM ORDER",
    description: "Review your selection and proceed to checkout.",
  },
  {
    number: "03",
    title: "ENJOY YOUR MEAL",
    description:
      "Pick up your meal in-store or have it delivered to your doorstep.",
  },
];

const OrderSteps = () => {
  return (
    <section className="w-full py-12 bg-white flex flex-col items-center justify-center px-5 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-start space-x-5 py-6 relative"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white text-lg font-bold rounded-full shadow-md">
              {step.number}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-5 top-16 h-12 w-[2px] bg-gray-300"></div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="flex space-x-5 mt-10">
        <a href="#" className="text-gray-700 hover:text-black text-xl">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-700 hover:text-black text-xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-700 hover:text-black text-xl">
          <FaInstagram />
        </a>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white mt-4 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-lg"
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default OrderSteps;
