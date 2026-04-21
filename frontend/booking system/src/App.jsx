import {useEffect,useState} from 'react';

export default function App(){
    const [accommodation,setAccommodation]=useState([]);
    const [page,setPage]=useState("home");

    const fetchAccommodations = async()=>{
        const res= await fetch("http://localhost:3000/accommodations");
        const data = await res.json();
        setAccommodation(data);
        setPage("accommodationList");
    }

return (
    <div>
        <h1>Accommodation management</h1>
        {page==="home" &&(
        <>
                <button onClick={fetchAccommodations}>すべての宿の一覧</button>
                {/*<button onClick={deleteEmployees}>職員の記録を消す</button>
                <button onClick={addEmployee}>新規登録</button>
                <button onClick={searchEmployee}>職員検索</button>*/}
        </>
        )}
        {page==="accommodationList" &&(
            <>
            <ul> {accommodation.map(acc => (
                <li key = {acc.id}>
                    <p>{acc.id}</p>
                    <p>{acc.accommodation_name}</p>
                </li> ))}
            </ul>
            </>
        )}
    </div>
    );
}
