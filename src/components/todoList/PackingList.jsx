import React from "react";

const PackingList = ({ items, onChangeItem, onDeleteItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-center gap-3 my-2"
        >
          <input
            type="checkbox"
            checked={item.packed}
            onChange={() => onChangeItem({ ...item, packed: !item.packed })}
          />
          <span>{item.title}</span>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PackingList;
