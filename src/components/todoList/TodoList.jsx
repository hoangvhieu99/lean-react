import { useState } from "react";
import AddItem from "./AddItem";
import PackingList from "./PackingList";

let nextId = 3;
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export default function TodoList() {
  const [items, setItems] = useState(initialItems);

  let length = items.length;
  let lengthPacked = items.filter((item) => item.packed === true).length;
  function handleAddItem(title) {
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem) {
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    // length -= 1;
    // setTotal(total - 1);
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <AddItem onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {lengthPacked} out of {length} packed!
      </b>
    </div>
  );
}
