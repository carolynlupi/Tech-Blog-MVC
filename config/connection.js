// Dotenv import
require("dotenv").config();

// Sequelize import
const Sequelize = require("sequelize");

// Determine the host and port based on the environment
const host = process.env.JAWSDB_URL ? 'your_jawsdb_host_here' : 'localhost';
const port = process.env.JAWSDB_URL ? 3306 : 8889; // Use 3306 for JawsDB, 8889 for local development

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.JAWSDB_URL || process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: host,
    port: port,
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

// Sequelize export
module.exports = sequelize;