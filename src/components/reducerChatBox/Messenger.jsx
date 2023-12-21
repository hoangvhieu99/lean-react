import { useReducer } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import { initialState, messengerReducer } from "./messengerReducer";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  // const message = state.message;
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center items-center gap-3">
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
