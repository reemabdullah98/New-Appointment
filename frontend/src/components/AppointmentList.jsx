// src/components/AppointmentList.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function AppointmentList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
   const token = localStorage.getItem('token');

  async function load() {
    try {
      setLoading(true);
      const { data } = await api.get('/appointments', {Authorization: token});
      setItems(data);
      setErr(null);
    } catch (e) {
      setErr(e?.response?.data?.error || e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onDelete(id) {
    try {
      await api.delete(`/appointments/${id}`);
      setItems((prev) => prev.filter((x) => x.id !== id));
    } catch (e) {
      alert(e?.response?.data?.error || e.message);
    }
  }

  if (loading) return <p>Loading…</p>;
  if (err) return <p className="alert error">Error: {err}</p>;

  return (
    <ul className="appointments">
      {items.map((a) => (
        <li key={a.id}>
          <strong>{a.name}</strong> — {a.service} — {a.date} {a.time}
          <button onClick={() => onDelete(a.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
