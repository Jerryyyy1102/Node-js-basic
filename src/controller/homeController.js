import connection from '../configs/connectDB';

let getHomepage = (req, res) => {
    //logic
    // simple query
    let data = [];
    connection.query(
        'SELECT * FROM `user` ',
        function (err, results, fields) {

            data = results.map((row) => { return row });
            return res.render('index.ejs', { dataUser: data, test: 'truyền biến (đơn giản là thêm thuộc tính)' })
        }
    );

}

module.exports = {
    getHomepage
}