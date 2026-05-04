export default function Home({
  fetchAccommodations,
  searchId,
  setSearchId,
  searchAccommodations,
  setPage
}) {
  return (
    <div>
      <h2>Home</h2>

      <button onClick={fetchAccommodations}>すべての宿の一覧</button>

      <input
        type="number"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="ID を入力"
      />

      <button onClick={searchAccommodations}>IDから検索</button>

      <button onClick={() => setPage("createAccommodation")}>
        宿泊施設を登録する
      </button>
    </div>
  );
}
