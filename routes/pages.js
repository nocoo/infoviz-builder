/*
    my-infoviz
    @copyright 2012  Zheng Li <lizheng@lizheng.me>
    @github https://github.com/nocoo/my-infoviz
    @license MIT
*/

exports.index = function (req, res) {
    res.render('index.jade', { title: 'Welcome - My InfoViz' });
};

exports.license = function (req, res) {
    res.render('license.jade', { title: 'The MIT License - My InfoViz' });
};
