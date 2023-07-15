import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM user');
    return res.render('index.ejs', { dataUser: rows, test: 'truyền biến (đơn giản là thêm thuộc tính)' })


}

let getDetailpage = async (req, res) => {
    let id = req.params.userId;
    let [users] = await pool.execute('select * from `user` where `id` = ? ', [id]);
    return res.send(JSON.stringify(users))
}
module.exports = {
    getHomepage, getDetailpage
}