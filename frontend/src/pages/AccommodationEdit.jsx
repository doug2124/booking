import { useState } from "react";

export default function AccommodationEdit({ editData, onUpdate }) {
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
    <div>
      <h2>宿泊施設の編集</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="accommodation_name"
          value={form.accommodation_name}
          onChange={handleChange}
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
        />

        <input
          name="city"
          value={form.city}
          onChange={handleChange}
        />

        <input
          name="type"
          value={form.type}
          onChange={handleChange}
        />

        <input
          name="rooms"
          type="number"
          value={form.rooms}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
        />

        <button type="submit">更新する</button>
      </form>
    </div>
  );
}
