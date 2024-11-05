import express from 'express'
import homeController from '../controller/homeController'


let router = express.Router()

const initWebRoute = (app) => {
    router.get('/users', homeController.getUsersPage);
    router.get('/home', homeController.getHomePage);
        return app.use('/', router);  // Lệnh khi thực thi đến return sẽ dừng lại
       
}

module.exports = initWebRoute;