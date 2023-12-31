// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const port = 3001; // Or any port you prefer

// Define routes
app.get('/', (req, res) => {
    // Render your home page
    res.sendFile(path.join(__dirname, '/views/layouts/home.handlebars'));
});

app.get('/login', (req, res) => {
    // Send the login page
    res.sendFile(path.join(__dirname, '/views/layouts/login.handlebars'));
});

app.get('/shopping-cart', (req, res) => {
    // Render your shopping cart page
    res.sendFile(path.join(__dirname, '/views/layouts/cart.handlebars'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});