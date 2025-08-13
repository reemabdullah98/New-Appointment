// Server/controllers/appointmentController.js
const pool = require('../config/db');

// GET /api/appointments
const getAppointments = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM appointments ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
   console.error('Error creating appointment:', err);
res.status(500).json({ error: err.message, details: err });
  }
};

// POST /api/appointments
const createAppointment = async (req, res) => {
  try {
    const { user_id, service_id, appointment_date, appointment_time } = req.body;
    const { rows } = await pool.query(
      `INSERT INTO appointments (user_id, service_id, appointment_date, appointment_time)
       VALUES ($1,$2,$3,$4) RETURNING *`,
      [user_id, service_id, appointment_date, appointment_time]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/appointments/:id
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM appointments WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Appointment not found' });
    res.json({ message: 'Appointment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAppointments, createAppointment, deleteAppointment };