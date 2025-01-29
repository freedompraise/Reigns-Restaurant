import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CustomerFeedback = () => {
  const stats = [
    { number: "2k", label: "HAPPY CUSTOMER" },
    { number: "6k", label: "SWIFT DELIVERY" },
    { number: "68", label: "FOOD MENU" },
  ];

  const testimonials = [
    {
      quote: "The service at Reign Restaurant is unmatched...",
      author: "JOAN",
      role: "BANKER",
    },
    {
      quote: "This is my absolute favorite restaurant in Benin City...",
      author: "KELVIN PETERS",
      role: "ENTREPRENEUR",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-headingColor text-center mb-12"
        >
          WHAT OUR CUSTOMERS SAY?
        </motion.h2>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="text-center p-6 bg-containerbg rounded-lg"
            >
              <h3 className="text-4xl font-bold text-cartNumBg mb-2">
                {stat.number}
              </h3>
              <p className="text-sm text-textColor uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-cardOverlay p-8 rounded-xl relative"
            >
              <FaQuoteLeft className="text-cartNumBg text-2xl mb-4 opacity-50" />
              <p className="text-textColor mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <FaQuoteRight className="text-cartNumBg text-2xl mb-4 opacity-50 ml-auto" />

              <div className="border-t-2 border-cartNumBg pt-4">
                <h4 className="font-bold text-headingColor">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-lightGray">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
