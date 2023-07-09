import mysql2 from 'mysql2';

// create the connection to database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// simple query
// connection.query(
//     'SELECT * FROM `user` ',
//     function (err, results, fields) {
//         console.log('>>Check mysql')
//         console.log(results); // results contains rows returned by server
//         // let rows = results.map((rows) => {
//         //     return rows.id;
//         // });
//         console.log(fields); // fields contains extra meta data about results, if available
//         console.log(results[0]);
//     }
// );

export default connection;