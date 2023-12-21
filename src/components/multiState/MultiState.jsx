import { useState } from "react";
import { letters } from "./data";
import Letter from "./Letter";

export default function MultiState() {
  // const [selectedId, setSelectedId] = useState([]);

  // // TODO: allow multiple selection
  // const selectedCount = selectedId.length;

  // function handleToggle(toggledId) {
  //   // TODO: allow multiple selection
  //   if (selectedId.includes(toggledId)) {
  //     setSelectedId(selectedId.filter((id) => id !== toggledId));
  //   } else {
  //     setSelectedId([...selectedId, toggledId]);
  //   }
  // }
  const [selectedId, setSelectedId] = useState(new Set());

  // TODO: allow multiple selection
  const selectedCount = selectedId.size;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    let chooseId = new Set(selectedId);
    if (chooseId.has(toggledId)) {
      chooseId.delete(toggledId);
    } else {
      chooseId.add(toggledId);
    }
    setSelectedId(chooseId);
  }
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold">Multi state</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedId.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </div>
  );
}
