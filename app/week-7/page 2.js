"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas";

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [mealIdeas, setMealIdeas] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Event handler to select an item
  const handleItemSelect = (item) => {
    if (item.name.includes(",")) {
      const ingredient = item.name.split(",")[0].trim(); // Split by comma and take the first part
      setSelectedItemName(ingredient);
    } else {
      const ingredient = item.name.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
      setSelectedItemName(ingredient);
    }
  };

  return (
    <div className="flex">
      <div class="flex-1 max-w-sm m-2">
        {/* Render NewItem component and pass handleAddItem as onAddItem prop */}
        <NewItem onAddItem={handleAddItem} />

        {/* Render ItemList component and pass items and handleItemSelect as props */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div class="flex-1 max-w-lg m-2 p-3 ">
        {/* Render MealIdeas component and pass selectedItemName as a prop */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;
