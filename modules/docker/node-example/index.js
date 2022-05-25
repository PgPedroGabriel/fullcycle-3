const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) =>  res.send(`<h1>Hello world</h1>`));

app.listen(port, () => console.log(`Running on port ${port}`))