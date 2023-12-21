import { useState } from "react";
import { Form } from "./Form";

const DisableInputText = () => {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form text={text} onChange={handleOnChange} />
      <button
        className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? "Hide hint" : "Show hint"}
      </button>
    </div>
  );
};

export default DisableInputText;
