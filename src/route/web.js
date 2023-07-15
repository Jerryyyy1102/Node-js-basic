import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {

    // https://expressjs.com/en/4x/api.html#router giải thích cho đoạn bên dưới
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userId', homeController.getDetailpage);
    router.post('/create-new-user', homeController.createNewUser);
    router.get('/about', homeController.getHomepage);

    return app.use('/', router)
}

module.exports = initWebRoute;