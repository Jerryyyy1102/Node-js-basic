import pool from '../configs/connectDB';

let getAllUsers = async (req, res) => {

    const [rows, fields] = await pool.execute('select * from user');

    return res.status(200).json({
        message: 'ok',
        data: rows
    })

}
let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into(firstName,lastName,email,address) values (?,?,?,?)',
        [firstName, lastName, email, address]);
    return res.redirect('');

}
module.exports = {
    getAllUsers, createNewUser
}