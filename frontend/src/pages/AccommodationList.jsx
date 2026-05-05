export default function AccommodationList({ accommodation, setPage, setEditData, onDelete }) {
  return (
    <>
      <ul>
        {accommodation.map(acc => (
          <li key={acc.id}>
            <p>ID: {acc.id}</p>
            <p>NAME: {acc.accommodation_name}</p>
            <p>ADDRESS: {acc.address}</p>
            <p>CITY: {acc.city}</p>
            <p>TYPE: {acc.type}</p>
            <p>ROOM NUMBER: {acc.rooms}</p>
            <p>PRICE: {acc.price}</p>

            <button
              onClick={() => {
                setEditData(acc);
                setPage("editAccommodation");
              }}
            >
              編集
            </button>

            <button
              onClick={() => onDelete(acc.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => setPage("home")}>戻る</button>
    </>
  );
}
