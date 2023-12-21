// import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        className="w-full"
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          // (Read the input value from e.target.value)
          dispatch({
            type: "edited_message",
            ...contact,
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        className="font-bold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          // reset message after sending
          dispatch({
            type: "sent_message",
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
