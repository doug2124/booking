export default function Home({
  fetchAccommodations,
  searchId,
  setSearchId,
  searchAccommodations,
  setPage
}) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Home</h2>

      <button style={styles.button} onClick={fetchAccommodations}>
        すべての宿の一覧
      </button>

      <input
        type="number"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="ID を入力"
        style={styles.input}
      />

      <button style={styles.button} onClick={searchAccommodations}>
        IDから検索
      </button>

      <button
        style={styles.createBtn}
        onClick={() => setPage("createAccommodation")}
      >
        宿泊施設を登録する
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fafafa",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  title: {
    textAlign: "center",
    marginBottom: "10px"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    backgroundColor: "#1976D2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  createBtn: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }
};
