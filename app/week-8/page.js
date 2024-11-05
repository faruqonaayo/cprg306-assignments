"use client";

import { useState } from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item";
import itemsData from "./item.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const [items, setItems] = useState([...itemsData]);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleAddItem(obj) {
    setItems((prev) => {
      return [...prev, { ...obj, id: prev.length + 1 }];
    });
  }

  function handleItemSelect(nameAndEmoji) {
    const name = nameAndEmoji.split(", ")[0];
    setSelectedItem(name);
  }
  return (
    <main className="flex ">
      <div className="">
        <NewItem onAddItem={handleAddItem} />
        <h1 className="text-4xl font-black my-10">Shopping List</h1>
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>{<MealIdeas ingredient={selectedItem} />}</div>
    </main>
  );
}
