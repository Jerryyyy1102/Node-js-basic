import connection from '../configs/connectDB';

let getHomepage = (req, res) => {
    //logic
    // simple query
    let data = [];
    connection.query(
        'SELECT * FROM `user` ',
        function (err, results, fields) {

            data = results.map((row) => { return row });
            console.log(results[0]);
            return res.render('index.ejs', { dataUser: JSON.stringify(data) })
        }
    );

}

module.exports = {
    getHomepage
}