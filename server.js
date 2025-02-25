const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9012;

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Fallback to index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
