"use client";

import React from 'react';
import Item from './item.js';
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList({ items , onItemSelect}) {
  const [sortBy, setSortBy] = useState("name");

  let theItems = itemsData.map((item =>({...item})));

  const sortedItems = [...items];

  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0;
    }
  });

  return (
    <div>
      <div className>
        <label>Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`bg-blue-500 text-white mx-4 px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-700" : ""
          }`}
        >
          Name
        </button>
        <span className="mx-2"></span>
        <button
          onClick={() => setSortBy("category")}
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-700" : ""
          }`}
        >
          Category
        </button>
      </div>
      <div>
        {/* displaying all objects in item card component, use sortedItems array    */}
        {sortedItems.map((item) => (
        <Item item={item} key={item.id} onSelect={() => onItemSelect(item)} />
        ))}
      </div>
    </div>
  );
}
