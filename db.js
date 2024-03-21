const { Pool } = require('pg');
require('dotenv').config(); 
// const { winstonLogger } = require('./winstonConfig');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})
// winstonLogger.info("POOL IMPORT process.env.DB_USER ! ") 
console.log("POOL IMPORT DB_USER : ", process.env.DB_USER)

// pool.query('SELECT NOW()').then() //x => console.log(x)

module.exports = pool;
