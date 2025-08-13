// src/services/api.js
const BASE = '/api';
export async function getAppointments() {
  const res = await fetch(`${BASE}/appointments`);
  if (!res.ok) throw new Error('Failed to fetch appointments');
  return res.json();
}

export async function createAppointment(payload) {
  const res = await fetch(`${BASE}/appointments, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || 'Failed to create appointment');
  }
  return res.json();
}

export async function deleteAppointment(id) {
  const res = await fetch(`${BASE}/appointments/${id}, { method: 'DELETE' }`);
  if (!res.ok) throw new Error('Failed to delete appointment');
  return res.json();
}