export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="contact-list">
      <ul className="flex flex-col items-start gap-2">
        {contacts.map((contact) => (
          <li key={contact.id} className="flex-1 w-full">
            <button
              className="w-full font-bold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                // TODO: dispatch changed_selection
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
