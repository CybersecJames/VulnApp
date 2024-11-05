// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => res.render('index'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require('./routes/auth');
app.use('/', authRoutes); // Link auth routes to the base path

