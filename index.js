const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    home = `Welcome to the BBtOW API!`;
  
    res.send(home);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;