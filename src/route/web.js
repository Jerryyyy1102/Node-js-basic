import express from "express";
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {

    // https://expressjs.com/en/4x/api.html#router giải thích cho đoạn bên dưới
    router.get('/', homeController.getHomepage);

    router.get('/about', homeController.getHomepage);

    return app.use('/', router)
}

module.exports = initWebRoute;