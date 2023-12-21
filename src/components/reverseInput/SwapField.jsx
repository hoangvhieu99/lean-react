import { useState } from "react";
import { Field } from "./Field";

const SwapField = () => {
  const [reverse, setReverse] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeFN = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLN = (e) => {
    setLastName(e.target.value);
  };
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  return (
    <>
      {reverse ? (
        <>
          <Field
            label="First name"
            text={firstName}
            handleChange={handleChangeFN}
          />
          <Field
            label="Last name"
            text={lastName}
            handleChange={handleChangeLN}
          />
        </>
      ) : (
        <>
          <Field
            label="Last name"
            text={lastName}
            handleChange={handleChangeLN}
          />
          <Field
            label="First name"
            text={firstName}
            handleChange={handleChangeFN}
          />
        </>
      )}
      {checkbox}
    </>
  );
};

export default SwapField;
