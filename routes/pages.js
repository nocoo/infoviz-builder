/*
    infoviz-builder
    @copyright 2012  Zheng Li <lizheng@lizheng.me>
    @github https://github.com/nocoo/infoviz-builder
    @license MIT
*/

exports.index = function (req, res) {
    res.render('index.jade', { title: 'Builder - InfoViz' });
};
