export function List({ items }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Food</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
