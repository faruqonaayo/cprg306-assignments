"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState([...itemsData]);

  function handleAddItem(obj) {
    setItems((prev) => {
      return [...prev, { ...obj, id: prev.length + 1 }];
    });
  }
  return (
    <main>
      <NewItem onAddItem={handleAddItem} />
      <h1 className="text-4xl font-black my-10">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
