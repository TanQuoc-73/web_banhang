

import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            if (err) throw err;
            return res.render('index.ejs', { dataUser: results });
        }
    );
}

module.exports ={
    getHomePage: getHomePage
}