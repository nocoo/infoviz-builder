/*
    my-infoviz
    @copyright 2012  Zheng Li <lizheng@lizheng.me>
    @github https://github.com/nocoo/my-infoviz
    @license MIT
*/

exports.index = function (req, res) {
    res.render('index', { title: 'Welcome - My InfoViz' });
};