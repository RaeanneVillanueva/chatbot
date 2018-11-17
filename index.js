'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var config = require('./Config.js');
var server = express();
var mongoose = require('mongoose');

var dogDescription = require('./API/Models/dogDescription');

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl,{useNewUrlParser:true});

server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

var routes = require('./API/Routes/Routes');
routes(server);

server.listen((process.env.PORT||8000),function(){
    console.log("Server is up and listening on port"+
    process.env.PORT);
});
