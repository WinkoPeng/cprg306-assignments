"use client";
import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");

    const [quantity, setQuantity] = useState("1");

    const [category, setCategory] = useState("produce");

    const [itemCreated, setItemCreated] = useState(false);

    const Submit = (event)=>{
        event.preventDefault();
        setItemCreated(true);
        alert("Added item: " + name + ", quantity: " + quantity + ", category: " + category);
        

        setName("");
        setQuantity("1");
        setItemCreated(false);
    }

    const NameChange = (event)=>{
        setName(event.target.value);
    }

    const QuantityChange = (event)=>{
        setQuantity(event.target.value);
    }

    const CategoryChange = (event)=>{
        setCategory(event.target.value);
    }

    return(
        <main className="flex justify-center w-full bg-black">
            {itemCreated}
            <form className="m-4 p-2 text-black w-full max-w-sm bg-slate-900 onSubmit={Submit}">
                
            <div className="mb-2">
            <input type="text" placeholder="Item name" required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    onChange={NameChange}
                    value={name} />
            </div>

            <div className="flex justify-between">
            <input type="number" min="1" max="99" required className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                    onChange={QuantityChange}
                    value={quantity} />
                    
                    <select className="border-2 border-gray-300 p-2 rounded-lg font-sans" 
                    onChange={CategoryChange}
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
            
            <div>
            <button type="submit" className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700">
                +</button>
            </div>

            </form>
            
        </main>
    )
}