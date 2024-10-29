"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  function handleSorting() {
    setSortBy(sortBy === "name" ? "category" : "name");
  }

  return (
    <ul className="flex flex-wrap flex-col">
      <button onClick={handleSorting} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded">
        Sort By {sortBy === "name" ? "category" : "name"}
      </button>
      {items
        .sort(function (a, b) {
          if (sortBy === "name") {
            return a.name.localeCompare(b.name);
          } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
          }
        })
        .map((item) => (
          <Item key={item.id} {...item} />
        ))}
    </ul>
  );
}
