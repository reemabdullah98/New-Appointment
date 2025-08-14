
// src/components/AppointmentList.jsx
import React, { useEffect, useState } from 'react';
//import { getAppointments, deleteAppointment } from '../services/api';

export default function AppointmentList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  //async function load() {
   // try {
     // setLoading(true);
      //setItems(await getAppointments());
      //setErr(null);
    //} catch (e) {
      //setErr(e.message);
    //} finally {
      //setLoading(false);
    //}
  //}

 // useEffect(() => { load(); }, []);

  const onDelete = async (id) => {
    try {
     // await deleteAppointment(id);
      setItems((prev) => prev.filter((x) => x.id !== id));
    } catch (e) {
      alert(e.message);
    }
  };

  if (loading) return <p>Loading…</p>;
  if (err) return <p className="alert error">Error: {err}</p>;

  return (
    <ul className="appointments">
      {items.map(a => (
        <li key={a.id}>
          <strong>{a.name}</strong> — {a.service} — {a.appointment_date} {a.appointment_time}
          <button onClick={() => onDelete(a.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}