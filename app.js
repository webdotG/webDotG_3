const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

// console.log("APP USE >>>>>>>,,,,,,,,,,,, : ", app.use )
// app.use((req, res, next) => {
//   console.log('express.json(): ', req, res, next);
//   next();
// });
// app.use((req, res, next) => {
//   console.log('express.urlencoded(): ', req, res, next);
//   next();
// });
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/user', require('./routes/user'));

app.use('/api/posts', require('./routes/post'))

app.use('/api/tags', require('./routes/tag'))

app.use('/api/cart', require('./routes/cart'));

//esli zapros ne proshel ne po odnomu routu vishe express otdset prosto statichnii faili v papke dist
app.use('/', express.static(path.join(__dirname, './CLIENT/dist')));

//esli voobshe ni chego ne srabotalo to prosto otday index.html
//mini nginx )))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './CLIENT/dist/index.html'));
});

const PORT = 1111 //process.env.PORT; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

module.exports = app;

