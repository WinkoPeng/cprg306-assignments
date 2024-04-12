"use client"

import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    //Initialize a state variable items with the data from items.json
    const [items, setItems] = useState(itemsData);

    //Create an event handler function handleAddItem that adds a new item to items
    const handleAddItem = (item) => {
      setItems([...items, item]);
    };

    return (
      <main className="bg-slate-950 p-2 m-2">        
          <div className="max-w-sm w-full text-white">
            <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
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