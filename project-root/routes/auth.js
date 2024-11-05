// routes/auth.js
const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login'); // Render login.ejs 
});

router.get('/register', (req, res) => {
    res.render('register'); // Render register.ejs
});

module.exports = router;
