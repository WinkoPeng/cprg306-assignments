"use client";

import { useState } from "react";
import Link from 'next/link';
import ItemList from './item-list.js';
import NewItem from "./new-item.js";
import MealIdea from "./meal-ideas.js";
import itemsData from "./items.json";

const allItems = [...itemsData];

export default function Page() {
  const [items, setItems] = useState(allItems);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    // Update the items state with the new item
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    if (typeof item.name === "string") {
      const cleanedItemName = item.name
        .split(',')[0] 
        .replace(/[^A-Za-z\s]/g, '') 
        .trim(); 
        
      setSelectedItemName(cleanedItemName);
    } else {
      console.error("Invalid item name:", item.name);
      setSelectedItemName("");
    }
  }

  return (
    <div className="flex-col">
      <h1 className="text-3xl font-bold text-center mt-5 mb-5">Shopping List (Week 8)</h1>
      <NewItem onAddItem={(item) => handleSubmit(item)}></NewItem>
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
