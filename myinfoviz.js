/*
    my-infoviz
    @copyright 2012  Zheng Li <lizheng@lizheng.me>
    @github https://github.com/nocoo/my-infoviz
    @license MIT
*/

var express = require('express'),
    pages = require('./routes/pages.js'),
    http = require('http'),
    path = require('path');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 60099);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/', pages.index);

http.createServer(app).listen(app.get('port'), function(){
    console.log("my-infoviz server listening on port " + app.get('port'));
});
