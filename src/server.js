

import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './route/web';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

initWebRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})