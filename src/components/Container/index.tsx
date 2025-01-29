import { FoodItem } from "../../../types";
import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import SingleFoodItem from "../FoodItem";
import NotFound from "../NotFound";

const Container = ({ items }: { items: FoodItem[] }) => {
  return (
    <motion.div className="w-full my-12 flex flex-wrap justify-center gap-6 px-2">
      {items && items.length > 0 ? (
        items.map((item: FoodItem) => (
          <SingleFoodItem key={item.id} item={item} />
        ))
      ) : (
        <NotFound text="No Food Items Available" />
      )}
    </motion.div>
  );
};

export default Container;
