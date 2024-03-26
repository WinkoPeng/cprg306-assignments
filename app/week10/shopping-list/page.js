"use client";

import { useState, useEffect } from "react"; // Importing useEffect
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from "./new-item.js";
import MealIdea from "./meal-ideas.js";
import { getItems, addItem } from './shopping-list-service.js'; // Importing getItems and addItem

export default function ShoppingList({ user }) {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Function to load items
  const loadItems = async (userId) => {
    try {
      const itemsData = await getItems(userId);
      setItems(itemsData);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  useEffect(() => {
    // Fetch items when the component mounts
    if (user) {
      const userId = user.uid; // Using user.uid if user is available
      loadItems(userId);
    }
  }, [user]); // Depend on user changes

  // Function to handle adding an item
  const handleAddItem = async (newItem) => {
    try {
      if (user) {
        const userId = user.uid; // Using user.uid if user is available
        const newItemId = await addItem(userId, newItem);
        
        // Set the ID of the new item returned from addItem
        newItem.id = newItemId;

        // Update the items state to include the new item
        setItems([...items, newItem]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  return (
    <div className="flex-col">
      <h1 className="text-3xl font-bold text-center mt-5 mb-5">Shopping List (Week 8)</h1>
      <NewItem onAddItem={(item) => handleAddItem(item)}></NewItem>
      <div className="flex">
        {/* ItemList */}
        <div className="flex-1">
          <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
        </div>

        {/* MealIdea */}
        <div className="flex-1">
          <MealIdea ingredient={selectedItemName}></MealIdea>
        </div>
      </div>
      <Link href="/" className="font-bold">Back to HomePage</Link>
    </div>
  );
}
