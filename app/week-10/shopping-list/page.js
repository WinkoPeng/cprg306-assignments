"use client"

import { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from "./new-item";
//import itemsData from "./items.json";
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
    //Initialize a state variable items with the data from items.json
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');

    const { user } = useUserAuth();

    //Get the shopping list
    const loadItems = async () => {
      if (user) {
        const items = await getItems(user.uid);

        if (items) 
          setItems(items);
      }     
    };

    useEffect(() => {
      loadItems();
    }, [user]);

    //Create an event handler function handleAddItem that adds a new item to items
    const handleAddItem = async (item) => { 
      
          const itemId = await addItem(user.uid, item);
          item.id = itemId;
          if (item) {
            setItems([...items, item]);
          }        
    };

    //Create an event handler function handleItemSelect that extracts the name of the selected item
    const handleItemSelect = (itemName) => {      
      //split and replace image of the itemName param to get the clean ingredient name
      setSelectedItemName(itemName.split(", ")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim());
    };

    return (
      <main className="bg-slate-950 p-2 m-2 text-white">     
       {user ?     
          <>
              <h2 className="text-3xl font-bold mb-4">Shopping List</h2>         
              <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                  <h3 className="text-xl font-bold">Add New Item</h3>
                  <NewItem onAddItem={handleAddItem} />
                  <ul>
                      <ItemList items={items} onItemSelect={handleItemSelect} />
                  </ul>
                </div>
                <div className="flex-1 max-w-sm m-2">
                  <MealIdeas ingredient={selectedItemName} />
                </div>
              </div>  
          </> 
          :
          <>
            <p>Your need to be signed in to view this page.</p>
            <a className="text-lg hover:underline" href="/week-8/">Back to Landing Page</a>
          </>
        }        
      </main>
    );
  }