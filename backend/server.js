const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const pool = require('./config/db');
const appointmentRoutes = require('./routes/appointmentRoutes');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');


const app = express();
app.use(cors());
app.use(express.json());


// Simple health check
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
