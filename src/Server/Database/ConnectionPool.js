const confg = require("./DatabaseConfig").config
const mysql = require('mysql');

// getting the connection pool
var con = mysql.createPool(
    confg
)

module.exports = con;