// Get the client
import mysql from 'mysql2';
// const mysql = require('');




// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'web_banhang',
});


//Kiem tra ket noi sql
console.log('CHECK SQL :')
connection.query(
    'SELECT * FROM `users`',
    function (err, results, fields) {

        // console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

export default connection;