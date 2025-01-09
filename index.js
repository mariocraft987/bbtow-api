const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    home = `
    <html>
        <head>
            <meta name="color-scheme" content="light dark">
            <meta charset="utf-8">
        </head>
        <body>
            <pre>hi</pre>
            <div class="json-formatter-container"></div>
        </body>
    </html>
    `;
  
    res.send(home);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;