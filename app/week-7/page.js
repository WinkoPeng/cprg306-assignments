"use client"
import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from './meal-ideas.js';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');
    const handleAddItem = (item) => {
      setItems([...items, item]);
    };
    const handleItemSelect = (itemName) => {      
      setSelectedItemName(itemName.split(", ")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim());
    };

    
    return (
      <main className="bg-slate-950">

        <div className="max-w-sm w-full">
           <h2 className="text-3xl font-bold">Shopping List</h2>
           <h3 className="text-xl font-bold">Add New Item</h3>
           <NewItem
             onAddItem={handleAddItem}          
           />
           <ul>
           <ItemList items={items} onItemSelect={handleItemSelect} />
           </ul>
        </div>

        <div className="flex-1 max-w-sm m-2">
           <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    );
  }