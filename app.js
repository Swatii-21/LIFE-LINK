// const express = require('express');
// const path = require('path');

// const app = express();

// // Set view engine and views directory
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/login', (req, res) => {
//   res.render('login');
// });

// app.get('/register', (req, res) => {
//   res.render('register');
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });

const express = require("express");
const path = require("path");

const app = express();

// Set view engine
app.set("view engine", "ejs");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

//for footer section
app.get('/bloodbank', (req, res) => res.render('bloodbank'));
app.get('/emergency', (req, res) => res.render('emergency'));
app.get('/appointments', (req, res) => res.render('appointments'));
app.get('/donation-drives', (req, res) => res.render('drives'));
app.get('/medicines', (req, res) => res.render('medicines'));
app.get('/news', (req, res) => res.render('news'));


// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
