const express = require('express');
const { join } = require('path');

const app = express();
const port = 4200;

app.use(express.static('./dist'));

app.listen(port, () => console.log(`App running on ${port}.`));
