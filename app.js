const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(logger('dev'));
app.use(cors());

console.log("APP USE >>>>>>>>>>>> : " )
console.log("APP USE >>>>>>>,,,,,,,,,,,, : ", app.use )
app.use((req, res, next) => {
  console.log('express.json(): ', req, res, next);
  next();
});
app.use(express.json());

app.use((req, res, next) => {
  console.log('express.urlencoded(): ', req, res, next);
  next();
});
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());



app.use('/api/user', require('./routes/user'));

app.use('/api/cart', require('./routes/cart'));

const PORT = process.env.PORT; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

module.exports = app;

