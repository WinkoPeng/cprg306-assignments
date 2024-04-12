"use client"

import { useState } from 'react';
import Item from "./item.js";
import itemsList from "./items.json";
import ItemCategoryList from './item-category-list.js';

export default function ItemList() {
  //define constant variables
  const nameValue = "name";
  const categoryValue = "category";
  const groupedCategoryValue = "grouped_category";
  const activeButtonColor = "bg-orange-500";
  const inactiveButtonColor = "bg-orange-700";
  const whiteColor = "white"
  
  //define useState, set the default sorting and default active button
  const [sortBy, setSortBy] = useState(nameValue);
  const [activeButton, setActiveButton] = useState(nameValue);
  
  //assign variables
  let myItemList = [...itemsList];  
  let categories = [...new Set(myItemList.map((item) => item.category).sort())];
  let isGrouped = false;  
  
  //handle button click
  function handleClick(value) {
    setSortBy(value);
    setActiveButton(value);
    return;    
  }

  //set sortBy and isGrouped value
  if (sortBy == nameValue) {
    myItemList = myItemList.sort((a, b) => a.name > b.name ? 1 : -1);
    isGrouped = false;
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
    isGrouped = false;
  }
  else if (sortBy == groupedCategoryValue) {
    //myItemList = myItemList.sort((a, b) => a.category > b.category  ? 1 : -1);
    myItemList = myItemList.sort(
      function(a, b) {          
         if (a.category === b.category) {
            //sort name if the category is the same
            return a.name > b.name;
         }
         return  a.category > b.category ? 1 : -1;
      });
    isGrouped = true;
  }

  return (
    <>
      <div className="text-white">
        <label htmlFor="sort">Sort by: </label>
        <button style={{ color: whiteColor }} className={`p-1 m-2 w-28 ${activeButton === nameValue  ? activeButtonColor : inactiveButtonColor}`}
           value={nameValue} 
          onClick={(e) => handleClick(e.target.value)}>Name</button>
        <button style={{ color: whiteColor }} className={`p-1 m-2 w-28 ${activeButton === categoryValue ? activeButtonColor : inactiveButtonColor}`}
          value={categoryValue} 
          onClick={(e) => handleClick(e.target.value)}>Category</button>  
        <button style={{ color: whiteColor }} className={`p-1 m-2 w-28 ${activeButton === groupedCategoryValue ? activeButtonColor : inactiveButtonColor}`}
          value={groupedCategoryValue} 
          onClick={(e) => handleClick(e.target.value)}>Grouped Category</button>       
      </div>      
        {isGrouped && categories.map((category) => (
          <ItemCategoryList
            key={category}
            category={category}
            items={myItemList}
            style={{ color: whiteColor }}
          />          
        ))}        
        {!isGrouped && myItemList.map((item) => (
          <Item 
            name={item.name}
            quantity={item.quantity}
            category={item.category} 
            key={item.id} 
            style={{ color: whiteColor }}
          />          
        ))}     
    </>
  );
  
}