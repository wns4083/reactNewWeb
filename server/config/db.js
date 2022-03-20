const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: '3915',
    database: 'test'
});
module.exports = db;