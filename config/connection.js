// Dotenv import
require("dotenv").config();

// Sequelize import
const Sequelize = require("sequelize");

// Define a variable to hold the database connection information
let sequelize;

if (process.env.JAWSDB_URL) {
  // Use the JawsDB URL provided by Heroku for production
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use local database configuration for development
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306, // Use 3306 as the default MySQL port
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

// Sequelize export
module.exports = sequelize;
