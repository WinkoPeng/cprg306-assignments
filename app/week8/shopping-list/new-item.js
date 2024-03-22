"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    // Call the onAddItem prop with the newItem object
    onAddItem(newItem);

    // Clear form fields
    setName("");
    setQuantity("");
    setCategory("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Create New Item
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <input
                required
                onChange={handleNameChange}
                value={name}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
                placeholder="Item Name"
              />
            </label>

            <label className="block mb-4">
              <input
                type="number"
                min="1"
                max="99"
                required
                className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </label>

            <label className="block mb-4">
              <select
                required
                onChange={handleCategoryChange}
                value={category}
                className="w-40 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
              >
                <option value="" disabled>Category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
