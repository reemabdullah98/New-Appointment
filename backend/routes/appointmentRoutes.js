const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const {
  getAppointments,
  createAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

// Mounted at /api/appointments
router.get('/',auth, getAppointments);
router.post('/',auth,  createAppointment);
router.delete('/:id', auth, deleteAppointment);

module.exports = router;
