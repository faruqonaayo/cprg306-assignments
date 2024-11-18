"use client";
import { useState } from "react";

const categories = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen Foods",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other",
];

function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Select a category");
  function increment(e) {
    e.preventDefault();
    setQuantity((c) => c + 1);
  }

  function decrement(e) {
    e.preventDefault();
    setQuantity((c) => c - 1);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (name && category && quantity) {
      onAddItem({ name, category, quantity });
    } else {
      alert("Please fill out all fields");
    }
  }

  return (
    <form className="flex flex-col gap-y-2.5 text-lg m-5 border-2 border-blue-400 rounded w-fit p-3 cursor-pointer">
      <input
        type="text"
        value={name}
        placeholder="Enter product name"
        className="border py-2 px-3 text-gray-950"
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={category}
        className="border py-2 px-3 text-gray-950"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value="">Select a category</option>
        {categories.map((c) => {
          return (
            <option value={c} key={c}>
              {c}
            </option>
          );
        })}
      </select>

      <div className="font-semibold text-xl ">
        Quantity: <span className="italic text-blue-400">{quantity}</span>
      </div>

      <div className="flex justify-between">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded"
          onClick={decrement}
          disabled={quantity === 1 ? true : false}
        >
          -
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
          onClick={increment}
          disabled={quantity === 20 ? true : false}
        >
          +
        </button>
      </div>
      <button
        onClick={handleFormSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add To Cart
      </button>
    </form>
  );
}

export default NewItem;
