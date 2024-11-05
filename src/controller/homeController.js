import express from "express";
import connection from "../configs/connectDB";

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

let getHomePage = (req, res) => {
    console.log('getHomePage');
    return res.render('../views/web/index.ejs');
};

module.exports ={
    getUsersPage: getUsersPage,
    getHomePage: getHomePage
}