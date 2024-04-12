"use client"

import { useState } from 'react';
import Item from "./item";
//import itemsList from "./items.json";

export default function ItemList( {items, onItemSelect } ) {
  //define constant variables
  const nameValue = "name";
  const categoryValue = "category";
  const activeButtonColor = "bg-orange-500";
  const inactiveButtonColor = "bg-orange-700";
  
  //define useState, set the default sorting and default active button
  const [sortBy, setSortBy] = useState(nameValue);
  const [activeButton, setActiveButton] = useState(nameValue);
  
  //assign variables
  //let myItemList = [...itemsList];  
  let myItemList = [...items]; 

  
  //handle button click
  function handleClick(value) {
    setSortBy(value);
    setActiveButton(value);
    return;    
  }

  //set sortBy and isGrouped value
  if (sortBy == nameValue) {
    myItemList = myItemList.sort((a, b) => a.name > b.name ? 1 : -1);
  }
  else if (sortBy == categoryValue) {
    //myItemList = myItemList.sort((a, b) => a.category > b.category  ? 1 : -1);
    myItemList = myItemList.sort(
      function(a, b) {          
        if (a.category === b.category) {
            //sort name if the category is the same
            return a.name > b.name;
        }
        return  a.category > b.category ? 1 : -1;
      });
  }   

  return (
    <>
      <div className="mt-8 w-auto">
        <label htmlFor="sort">Sort by: </label>
        <button className={`p-1 m-2 w-28 ${activeButton === nameValue  ? activeButtonColor : inactiveButtonColor}`}
           value={nameValue} 
          onClick={(e) => handleClick(e.target.value)}>Name</button>
        <button className={`p-1 m-2 w-28 ${activeButton === categoryValue ? activeButtonColor : inactiveButtonColor}`}
          value={categoryValue} 
          onClick={(e) => handleClick(e.target.value)}>Category</button>              
      </div>                 
        {myItemList.map((item) => (
          <Item 
            name={item.name}
            quantity={item.quantity}
            category={item.category} 
            key={item.id} 
            onSelect={() => onItemSelect(item.name)}
          />          
        ))}     
    </>
  );
}