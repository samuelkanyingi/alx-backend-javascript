const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.use((req, res) => {
  res.status(404).send(`
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="utf-8">
 <title>Error</title>
 </head>
 <body>
 <pre>Cannot GET ${req.url}</pre>
 </body>
 </html>
 `);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
