import { useState } from "react";
import Input from "./Input";

export default function SyncedInputs() {
  const [textIndex, setTextIndex] = useState("");
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Input
        label="First input"
        text={textIndex}
        handleInputChange={(e) => setTextIndex(e.target.value)}
      />
      <Input
        label="Second input"
        text={textIndex}
        handleInputChange={(e) => setTextIndex(e.target.value)}
      />
    </div>
  );
}
