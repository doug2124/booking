import { useState } from "react";
import Home from "./pages/Home";
import AccommodationList from "./pages/AccommodationList";
import AccommodationCreate from "./pages/AccommodationCreate";
import AccommodationEdit from "./pages/AccommodationEdit";

export default function App() {
  const [accommodation, setAccommodation] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [page, setPage] = useState("home");
  const [editData, setEditData] = useState(null);


  const fetchAccommodations = async () => {
    const res = await fetch("http://localhost:3000/accommodations");
    const data = await res.json();
    setAccommodation(data);
    setPage("accommodationList");
  };

  const searchAccommodations = async () => {
    const res = await fetch(`http://localhost:3000/accommodations/${searchId}`);
    const data = await res.json();
    setAccommodation([data]);
    setPage("accommodationList");
  };

  const createAccommodation = async (form) => {
    const res = await fetch("http://localhost:3000/accommodations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        rooms: Number(form.rooms),
        price: Number(form.price)
      })
    });
  
    if (res.ok) {
      alert("登録が完了しました！");
      setPage("home");
    } else {
      const error = await res.json();
      console.log("エラー内容:", error);
      alert("登録に失敗しました");
    }
  };

  const updateAccommodation = async (form) => {
    const res = await fetch(`http://localhost:3000/accommodations/${form.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        rooms: Number(form.rooms),
        price: Number(form.price)
      })
    });
  
    if (res.ok) {
      alert("更新が完了しました！");
      setPage("home");
    } else {
      alert("更新に失敗しました");
    }
  };
  const deleteAccommodation = async (id) => {
    const res = await fetch(`http://localhost:3000/accommodations/${id}`, {
      method: "DELETE"
    });
  
    if (res.ok) {
      alert("削除が完了しました！");
      fetchAccommodations();
    } else {
      alert("削除に失敗しました");
    }
  };
  

  return (
    <div>
      <h1>Accommodation management</h1>

      {page === "home" && (
        <Home
          fetchAccommodations={fetchAccommodations}
          searchId={searchId}
          setSearchId={setSearchId}
          searchAccommodations={searchAccommodations}
          setPage={setPage}
          onDelete={deleteAccommodation}
        />
      )}

      {page === "accommodationList" && (
        <AccommodationList
          accommodation={accommodation}
          setPage={setPage}
          setEditData={setEditData}
          onDelete={deleteAccommodation}
        />
      )}
      {page === "createAccommodation" && (
        <AccommodationCreate onCreate={createAccommodation} setPage={setPage} />
      )}
      {page === "editAccommodation" && (
        <AccommodationEdit editData={editData} onUpdate={updateAccommodation} setPage={setPage} />
      )}
    </div>
  );
}
