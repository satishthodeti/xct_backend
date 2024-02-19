const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  cookieName: process.env.XCT_COOKIE_NAME,
  refreshTokenSecret: process.env.XCT_AUTH_SECRET_KEY,
  authSecret:process.env.REFRESH_AUTH_SECRET_KEY,
  db: {
    host: process.env.DB_HOSTNAME,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  }
};