const express = require('express');
const router = express.Router();
const {
    getAppointments,
    createAppointment,
    deleteAppointment,
} = require('../controllers/appointmentController');

router.get('/appointments', getAppointments);
router.post('/appointments', createAppointment);
router.delete('/appointments/:id', deleteAppointment);

module.exports = router;