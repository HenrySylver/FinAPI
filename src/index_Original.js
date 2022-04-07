const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello World Ignite - Fundamentos NodeJS' }));

// localhost:3333
app.listen(3333);
