const { Pool } = require('pg');
const { db } = require('./config');

const pool = new Pool({
  host: db.host,
  database: db.database,
  user: db.username,
  password: db.password,
  port: db.port
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('remove', () => {
  console.log('Client removed');
});

const query = async (text, params) => {
  const start = Date.now();
  const result = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('Executed query:', JSON.stringify({ text, duration, rows: result.rowCount }));
  return result;
};

module.exports = { query };