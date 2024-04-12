"use client";

import { useState } from "react";

export default function NewItem( {onAddItem} ) {
    const [ name, setName ] = useState("");
    const [ quantity, setQuantity ] = useState("1");
    const [ category, setCategory ] = useState("produce");
    const [ itemCreated, setItemCreated ] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();

        //alert("Added item: " + name + ", quantity: " + quantity + ", category: " + category);
        const newItem = {
            id:Math.random(),
            name,
            quantity,
            category
          };

        onAddItem(newItem);

        setItemCreated(true);
    
        setName("");
        setQuantity("1");
        setCategory("produce");
    
        setItemCreated(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
            {itemCreated}                    
            <form className= "text-black" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input type="text" placeholder="Item name" required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    onChange={handleNameChange}
                    value={name} />
                </div>
                <div className="flex justify-between">
                    <input type="number" min="1" max="99" required className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                    onChange={handleQuantityChange}
                    value={quantity} />
                    <select className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                    onChange={handleCategoryChange}
                    value={category}>
                        <option disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>                    
                </div>
                <button type="submit" className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                +</button>
            </form>            
        </>
    );
}



