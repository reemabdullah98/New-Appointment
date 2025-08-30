const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET all products
router.get('/', async (req, res) => {
  try {
    const {rows} = await pool.query('SELECT * FROM products');
    console.log(rows)
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

module.exports = router;