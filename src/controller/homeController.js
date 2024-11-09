import express from "express";
import connection from "../configs/connectDB";


// WEB TRANG CHỦ
let getHomePage = (req, res) => {
    console.log('getHomePage');
    return res.render('../views/web/home.ejs');
};


//WEB NGƯỜI DÙNG
let getUsersPage = (req, res) => {
    let data =[];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            if (err) throw err;
            return res.render('../views/web/users.ejs', { dataUser: results });
        }
    );
}


// WEB THÔNG TIN CHI TIẾT NGƯỜI DÙNG
let getDetailPage = (req, res) => {
    console.log('getDetailPage');
    return res.render('../views/web/detail.ejs');
}



module.exports ={
    getUsersPage: getUsersPage,
    getHomePage: getHomePage,
    getDetailPage: getDetailPage
}