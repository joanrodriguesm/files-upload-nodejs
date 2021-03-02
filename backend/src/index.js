const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = 3333;

/**
  * Database setup
**/
mongoose.connect();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));