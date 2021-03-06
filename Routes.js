'use strict'

var express = require('express');

module.exports = function(app){
    var dataController = require('../Controllers/dataController')

    var apiRoutes = express.Router();

    app.get('/', function(req, res){
        res.send('We are happy to see you');
    });

    app.route('/').post(dataController.processRequest);

};