import { useState } from "react";

export default function EditContact({ initialData, onSave }) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  return (
    <section className="mt-2">
      <div className="flex gap-3 justify-center items-center mb-2">
        <div className="">Name:</div>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          value={name}
          placeholder={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex gap-3 justify-center items-center mb-2">
        <div className=""> Email:</div>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="text"
          value={email}
          placeholder={email}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        onClick={() => {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email,
          };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          setName(initialData.name);
          setEmail(initialData.email);
        }}
      >
        Reset
      </button>
    </section>
  );
}
