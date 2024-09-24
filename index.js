const express = require('express');
const path = require('path');

const app = express();
const port = 3009;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
