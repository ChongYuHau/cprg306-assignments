import { useState, useEffect } from "react";
import { getItems, addItem } from "../_service/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context"; // Import the user authentication context

const Page = () => {
  const { user } = useUserAuth(); // Get the user from context
  const [items, setItems] = useState([]);
  const [mealIdeas, setMealIdeas] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to load items from Firestore
  const loadItems = async () => {
    if (user?.uid) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  };

  // Fetch items when the component mounts or when user.uid changes
  useEffect(() => {
    loadItems();
  }, [user?.uid]);

  // Event handler to add a new item
  const handleAddItem = async (newItem) => {
    if (user?.uid) {
      const newItemId = await addItem(user.uid, newItem);
      if (newItemId) {
        setItems(prevItems => [...prevItems, { ...newItem, id: newItemId }]);
      }
    }
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
      <div className="flex-1 max-w-sm m-2">
        {/* Render NewItem component and pass handleAddItem as onAddItem prop */}
        <NewItem onAddItem={handleAddItem} />

        {/* Render ItemList component and pass items and handleItemSelect as props */}
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="flex-1 max-w-lg m-2 p-3">
        {/* Render MealIdeas component and pass selectedItemName as a prop */}
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
};

export default Page;

