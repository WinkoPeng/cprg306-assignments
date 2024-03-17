import Item from "./item.js";
//import itemsList from "./items.json";
import ItemCategoryList from './item-category-list.js';
import { useState } from 'react';

export default function ItemList({items}) {
    const nameValue = "name";
    const categoryValue = "category";
    //const groupedCategoryValue = "grouped_category";
    const activeButtonColor = "bg-orange-500";
    const inactiveButtonColor = "bg-orange-700";
    const [sortBy, setSortBy] = useState(nameValue);
    const [activeButton, setActiveButton] = useState(nameValue);
    
    let myItemList = [...items];  
    
    function handleClick(value) {
      setSortBy(value);
      setActiveButton(value);
      return;    
    }
  
    if (sortBy == nameValue) {
      myItemList = myItemList.sort((a, b) => a.name > b.name ? 1 : -1);
      //isGrouped = false;
    }
    else if (sortBy == categoryValue) {
      //myItemList = myItemList.sort((a, b) => a.category > b.category ? 1 : -1);
      //isGrouped = false;
      myItemList = myItemList.sort(
        function(a, b) {          
           if (a.category === b.category) {
              //sort name if the category is the same
              return a.name > b.name;
           }
           return  a.category > b.category ? 1 : -1;
        });
    }

    // else if (sortBy == groupedCategoryValue) {
    //   myItemList = myItemList.sort((a, b) => a.category > b.category ? 1 : -1);
    //   isGrouped = true;
    // }
  
    return (
      <>
        <div  className="mt-8 w-auto">
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