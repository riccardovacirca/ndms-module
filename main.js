// main.js
const express = require('express');
const router = express.Router();

// Middleware specifico per la webapp
router.use(express.json());

// Route di esempio
router.get('/hello', (req, res) => {
    res.send('Hello from the webapp! :))))');
});

// Esporta il router come modulo
module.exports = router;
