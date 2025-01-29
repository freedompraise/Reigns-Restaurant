import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import mockup from "../img/mockup.png";

const AppDownload = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-containerbg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex-1"
        >
          <img
            src={mockup}
            alt="App mockup"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Download Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-bold text-headingColor"
          >
            Get Our Mobile App
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-textColor text-lg md:text-xl max-w-md"
          >
            Order your favorite meals in just a few clicks. Download our app for
            faster ordering, exclusive offers, and special rewards!
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-headingColor text-primary px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <FaApple className="text-xl" />
              <div className="text-left">
                <span className="text-xs">Download on the</span>
                <p className="font-bold">App Store</p>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cartNumBg text-primary px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <FaGooglePlay className="text-xl" />
              <div className="text-left">
                <span className="text-xs">Get it on</span>
                <p className="font-bold">Google Play</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
