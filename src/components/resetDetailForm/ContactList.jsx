export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <section>
      <ul className="flex justify-center items-center gap-3 mb-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                onSelect(contact.id);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
