require("dotenv").config();
const {Sequelize} = require ("sequelize");


const products =require("./Models/Products");
const users = require("./Models/Users");

//variables de entorno 
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env

//conexión a DB
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})



products(sequelize);
users(sequelize);
const {Products, Users }= sequelize.models

module.exports = sequelize;