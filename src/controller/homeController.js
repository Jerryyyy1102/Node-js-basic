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

let createNewUser = async (req, res) => {
    console.log('check req: ', req.body);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into user(firstName,lastName,email,address) values (?,?,?,?)',
        [firstName, lastName, email, address]);
    return res.redirect('/');
}
module.exports = {
    getHomepage, getDetailpage, createNewUser
}