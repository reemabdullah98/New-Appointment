// Server/controllers/appointmentController.js
const pool = require('../config/db');
const auth = require('../middleware/auth')
// GET /api/appointments
const getAppointments =  async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM appointments ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ error: err.message });
  }
};

// POST /api/appointments
const createAppointment = async (req, res) => {
  try {
   const userid = req.user.id;
    const { name, phone, service, date, time } = req.body;
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ error: 'Missing required fields (name, phone, service, date, time)' });
    }
    const { rows } = await pool.query(
      'INSERT INTO appointments (name, phone, service, date, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, phone, service, date, time]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Error creating appointment:', err);
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
    console.error('Error deleting appointment:', err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAppointments, createAppointment, deleteAppointment };
