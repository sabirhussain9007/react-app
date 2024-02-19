// server.js

import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
