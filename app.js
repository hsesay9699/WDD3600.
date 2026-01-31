/**
 * app.js
 * Main Express application entry point.
 * This week includes middleware, routing, and rendering views (EJS).
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();

// Set EJS as the templating engine for dynamic views
app.set('view engine', 'ejs');
app.set('views', 'views');

// Parse incoming form data (body-parser middleware)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 handler (no route matched)
app.use(errorController.get404);

app.listen(3000);
