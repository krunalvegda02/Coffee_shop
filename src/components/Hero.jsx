import React from "react";
import { ItemCard } from "./Itemcard";
import CategoryCard from "./CategoryCard";
import menus from "../menu.json";
import { useState ,  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";

function Hero({tableIndex}) {
  const isOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const tables = useSelector((state) => state.Tables);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("All Menu");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  //? Filtered items
  const filteredItems =
    selectedCategory === "All Menu"
      ? menus.menu.reduce(
          (allItems, category) => allItems.concat(category.items),
          []
        )
      : menus.menu.find((category) => category.category === selectedCategory)
          ?.items;

  const addTOMenu = () => {
    console.log("addMenu called");
    // dispatch(addToOrder({ tableIndex, menuItem: item }));
  };

  const removeFromMenu = () => {
    console.log("removeMenu called");
    // dispatch(removeFromOrder({ tableIndex, menuItem: item }));
  };

  const resetOrder = () => {
    dispatch(resetOrder({ tableIndex }));
  };

  useEffect(() => {
         console.log("tables state from Redux:", tables); // Check if tables data is coming through correctly
       }, [tables]);
    
  return (
    <div
      className={`p-3 transition-all duration-300 ${
        isOpen ? "mr-[20rem]" : ""
      }`}
    >
      {/* Category Container */}
      <div className="container scrollbar-hide overflow-x-auto w-full bg-slate-200 my-1">
        <CategoryCard
          onCategoryChange={handleCategoryChange}
          selectedCategory={setSelectedCategory}
        />
      </div>

      {/* Display items */}
      <div className="flex flex-wrap gap-4 ">
        {filteredItems.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
            Quantity={0}
            addItem={() => addTOMenu(item)}
            removeItem={() => removeFromMenu(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
