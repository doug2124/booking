export default function AccommodationList({ accommodation, setPage, setEditData, onDelete }) {
  return (
    <>
      <ul>
        {accommodation.map(acc => (
          <div key={acc.id} style={styles.accommodationCard}>
            <p style={styles.accommodationItem}>
              <span style={styles.accommodationLabel}>ID:</span>
              <span style={styles.accommodationValue}>{acc.id}</span>
            </p>
            <p style={styles.accommodationItem}>
              <span style={styles.accommodationLabel}>NAME:</span>
              <span style={styles.accommodationValue}>{acc.accommodation_name}</span>
            </p>
            <p style={styles.accommodationItem}>
              <span style={styles.accommodationLabel}>ADDRESS:</span>
              <span style={styles.accommodationValue}>{acc.address}</span>
            </p>
            <p style={styles.accommodationItem}>
              <span style={styles.accommodationLabel}>CITY:</span>
              <span style={styles.accommodationValue}>{acc.city}</span>
            </p>
            <p style={styles.accommodationItem}>
              <span style={styles.accommodationLabel}>TYPE:</span>
              <span style={styles.accommodationValue}>{acc.type}</span>
            </p>
            <p style={styles.accommodationItem}>
              <span style={styles.accommodationLabel}>ROOM NUMBER:</span>
              <span style={styles.accommodationValue}>{acc.rooms}</span>
            </p>
            <p style={styles.accommodationItem}>
              <span style={styles.accommodationLabel}>PRICE:</span>
              <span style={styles.accommodationValue}>{acc.price}</span>
            </p>
            
            <div style={styles.buttonRow}>
              <button
                style={{
                  ...styles.btn,
                  ...styles.btnEdit
                }}
                onClick={() => {
                  setEditData(acc);
                  setPage("editAccommodation");
                }}
              >
                編集
              </button>

              <button
                onClick={() => onDelete(acc.id)}
                style={{
                  ...styles.btn,
                  ...styles.btnDelete
                }}
              >
                削除
              </button>
            </div>
          </div>
        ))}
      </ul>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={styles.btnBack} onClick={(
        ) => setPage("home")}>戻る</button>
      </div>
    </>
  );
}
const styles ={
  accommodationCard: {
    maxWidth: "480px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    fontFamily: "sans-serif",
  },
  
  accommodationTitle :{
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  
  accommodationItem :{
    marginBottom: "10px",
    fontSize: "16px",
    display: "flex",
    gap: "6px",
  },
  
  accommodationLabel :{
    fontWeight: "600",
    color: "#444",
    minWidth: "130px",
  },
  
  accommodationValue : {
    marginLeft: "4px",
    color: "#222",
  },
  
  buttonRow:{
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
  },
  
  btn : {
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
  },
  
  btnEdit :{
    background: "#3b82f6",
    color: "white",
  },
  
  btnDelete : {
    background:"#ef4444",
    color: "white",
  },
  
  btnBack: {
    background: "#6b7280",
    color: "white",
    marginTop: "20px",
    width: "30%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    justifyContent:"center",
    display:"flex",
    alignItems: "center",
  },
};