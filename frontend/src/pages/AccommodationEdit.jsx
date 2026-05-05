import { useState } from "react";

export default function AccommodationEdit({ editData, onUpdate ,setPage}) {
  const [form, setForm] = useState(editData);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(form);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>宿泊施設の編集</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="accommodation_name"
          value={form.accommodation_name}
          onChange={handleChange}
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="rooms"
          type="number"
          value={form.rooms}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.submitBtn}>更新する</button>
      </form>

      <button onClick={() => setPage("home")} style={styles.backBtn}>
        戻る
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
    backgroundColor: "#fafafa"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  submitBtn: {
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  backBtn: {
    marginTop: "20px",
    width: "100%",
    padding: "10px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

