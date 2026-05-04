import { useState } from "react";

export default function AccommodationCreate({ onCreate }) {
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
    <div>
      <h2>宿泊施設の登録</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="accommodation_name"
          placeholder="宿の名前"
          value={form.accommodation_name}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="住所"
          value={form.address}
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="市区町村"
          value={form.city}
          onChange={handleChange}
        />

        <input
          name="type"
          placeholder="タイプ（ホテル、旅館など）"
          value={form.type}
          onChange={handleChange}
        />

        <input
          name="rooms"
          type="number"
          placeholder="部屋数"
          value={form.rooms}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="1泊の料金"
          value={form.price}
          onChange={handleChange}
        />

        <button type="submit">登録する</button>
      </form>
    </div>
  );
}
