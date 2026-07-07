import { useState } from "react";

export default function AccommodationCreate({ onCreate, setPage }) {
  const [form, setForm] = useState({
    accommodation_name: "",
    address: "",
    city: "",
    type: "",
    rooms: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(form);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>宿泊施設の登録</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="accommodation_name"
          placeholder="宿の名前"
          value={form.accommodation_name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="address"
          placeholder="住所"
          value={form.address}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="city"
          placeholder="市区町村"
          value={form.city}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="type"
          placeholder="タイプ（ホテル、旅館など）"
          value={form.type}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="rooms"
          type="number"
          placeholder="部屋数"
          value={form.rooms}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="price"
          type="number"
          placeholder="1泊の料金"
          value={form.price}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, photoFile: e.target.files[0] })}
        />
        <button type="submit" style={styles.submitBtn}>登録する</button>
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
