// This is a test change for GitHub branch and pull request
const pool = require('../config/db');

// 📌 Get all appointments
const getAppointments = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM appointments');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 📌 Create new appointment
const createAppointment = async (req, res) => {
    try {
        const { name, phone, service, date, time } = req.body;
        const result = await pool.query(
            'INSERT INTO appointments (name, phone, service, date, time) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, phone, service, date, time]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 📌 Delete appointment
const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM appointments WHERE id = $1', [id]);
        res.json({ message: 'Appointment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAppointments,
    createAppointment,
    deleteAppointment
};

console.log("Controller loaded");