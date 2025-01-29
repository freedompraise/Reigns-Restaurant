import { useState } from "react";
import Container from "../../Container";
import Filters from "../../Filters";
import { Title } from "..";
import { useStateValue } from "../../../context/StateProvider";

const Menu = ({ title }: { title?: string }) => {
  const [{ foodItems }] = useStateValue();
  const [filter, setFilter] = useState<string>("all");

  return (
    <section className="w-full my-5">
      <div className="w-full flex items-center justify-center">
        <Title title={title || "Popular Dishes"} center />
      </div>
      <Filters filter={filter} setFilter={setFilter} />
      <Container
        items={
          filter === "all"
            ? foodItems
            : foodItems.filter(
                (item: { category: string }) => item.category === filter
              )
        }
      />
    </section>
  );
};

export default Menu;
