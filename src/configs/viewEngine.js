import express from 'express';

const path  = require('path');

const configViewEngine = (app) => {

    // config static files
    app.use(express.static(path.join(__dirname, '../public')));
    
    // config view engine
    app.set('view engine', "ejs");
    app.set('views', path.join(__dirname, '../views'));
    
}

export default configViewEngine;