"use client";
import { useState } from "react";

function NewItem({ name, category }) {
  const [quantity, setQuantity] = useState(1);
  function increment() {
    setQuantity((c) => c + 1);
  }

  function decrement() {
    setQuantity((c) => c - 1);
  }
  return (
    <div className="text-lg m-5 border-2 border-blue-400 rounded w-fit p-3 cursor-pointer">
      <div className="font-semibold text-xl ">
        New Item: <span className="italic text-yellow-400">{name}</span>
      </div>
      <div className="font-semibold text-xl ">
        Quantity: <span className="italic text-blue-400">{quantity}</span>
      </div>
      <div className="font-semibold text-xl ">
        Category: <span className="italic text-green-400">{category}</span>
      </div>

      <div className="flex justify-between">
        <button
          class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded"
          onClick={decrement}
          disabled={quantity === 1 ? true : false}
        >
          -
        </button>
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
          onClick={increment}
          disabled={quantity === 20 ? true : false}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default NewItem;
