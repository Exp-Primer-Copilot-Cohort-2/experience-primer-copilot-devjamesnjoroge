// Create web server
const express = require('express');
const path = require('path');
const app = express();

// Add the path of the static files
app.use(express.static(path.join(__dirname, 'public')));

// Create a route for the comments
app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});