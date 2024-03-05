"use client"
import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (item) => {
      setItems([...items, item]);
    };
    
    return (
      <main className="bg-slate-950">

        <div className="max-w-sm w-full">
           <h2 className="text-3xl font-bold">Shopping List</h2>
           <h3 className="text-xl font-bold">Add New Item</h3>
           <NewItem
             onAddItem={handleAddItem}          
           />
        </div>

        <div>
            <ul>
                <ItemList items={items}/>
            </ul>
        </div>
      </main>
    );
  }