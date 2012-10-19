;(function () {
    'use strict';
    /*global seajs*/
    $(document).ready(function () {
        seajs.use([ '/js/infoviz.js' ], function (InfoViz) {
            //Logo is disabled by default.
            InfoViz.enable_logo();

            // Global option overwrite.
            InfoViz.global_option({
                'layout': { 'background-color': '#FFF', 'logo-url': '../images/infoviz_logo_tiny.png' },
            });

            // Test1
            var draw_chart = function () {
                InfoViz.chart(
                    'main_chart',
                    'linechart',
                    {
                        'vertical_axis_name': 'Vertical',
                        'horizontal_axis_name': 'Horizontal',
                        'horizontal_field': 'F2',
                        'vertical_field': 'F1',
                        'tooltip_title': 'InfoViz {F2}, {F3}',
                        'tooltip_content': 'Tooltip: {F2}, {F3} | {F1}',
                        'data': {
                            'line1': {
                                'name': 'China',
                                'data': [
                                    { 'F1': 1,   'F2': 'A', 'F3': 3  },
                                    { 'F1': 42,  'F2': 'B', 'F3': 6  },
                                    { 'F1': 7,   'F2': 'C', 'F3': 9  },
                                    { 'F1': 110, 'F2': 'D', 'F3': 12 }
                                ]
                            },
                            'line2': {
                                'name': 'Unite States',
                                'data': [
                                    { 'F1': 13, 'F2': 'A', 'F3': 15 },
                                    { 'F1': 10, 'F2': 'B', 'F3': 12 },
                                    { 'F1': 72, 'F2': 'C', 'F3': 9  },
                                    { 'F1': 1,  'F2': 'D', 'F3': 3  },
                                    { 'F1': 4,  'F2': 'E', 'F3': 6  }
                                ]
                            },
                            'line3': {
                                'name': 'Unite Kingdom',
                                'data': [
                                    { 'F1': 19, 'F2': 'A', 'F3': 15 },
                                    { 'F1': 20, 'F2': 'B', 'F3': 12 },
                                    { 'F1': 11, 'F2': 'D', 'F3': 3  },
                                    { 'F1': 42, 'F2': 'E', 'F3': 6  }
                                ]
                            },
                            'line4': {
                                'name': 'Italy',
                                'data': [
                                    { 'F1': 29, 'F2': 'A', 'F3': 15 },
                                    { 'F1': 70, 'F2': 'B', 'F3': 12 },
                                    { 'F1': 42, 'F2': 'C', 'F3': 9  },
                                    { 'F1': 51, 'F2': 'D', 'F3': 3  },
                                    { 'F1': 22, 'F2': 'E', 'F3': 6  }
                                ]
                            },
                            'line5': {
                                'name': 'Russia',
                                'data': [
                                    { 'F1': 9,  'F2': 'A', 'F3': 15 },
                                    { 'F1': 90, 'F2': 'B', 'F3': 12 },
                                    { 'F1': 92, 'F2': 'C', 'F3': 9  },
                                    { 'F1': 52, 'F2': 'E', 'F3': 6  }
                                ]
                            }
                        }
                    },
                    { 'legend': { 'margin-top': 0 } }
                );
            };

            // Generate global style.
            if ($('ul.stylelist').length > 0) {
                var todo = [ 'layout', 'grid', 'legend', 'tooltip' ];
                var template = $('.globalstyles ul.l-layout li').clone();

                var save = function () {
                    var options = {}, item, element, value;;
                    for (var i = 0; i < todo.length; ++i) {
                        options[todo[i]] = {};

                        for (item in window.InfoViz.options[todo[i]]) {
                            element = $('#gv_' + todo[i].replace('-', '_') + item.replace('-', '_'));
                            value = element.attr('value');

                            if (value === '') {
                                value = undefined;
                            }

                            if (window.InfoViz.options[todo[i]][item] === true || window.InfoViz.options[todo[i]][item] === false) {
                                value = !!value;
                            }

                            if (parseInt(value, 10).toString() !== 'NaN') {
                                value = parseInt(value, 10);
                            }

                            options[todo[i]][item] = value;
                        }
                    }

                    InfoViz.global_option(options);
                    InfoViz.clear('main_chart', true);
                    draw_chart();
                };

                var reset = function () {
                    $('.globalstyles ul.stylelist li').remove();
                    for (var i = 0; i < todo.length; ++i) {
                        var item, element, value;
                        for (item in window.InfoViz.options[todo[i]]) {
                            element = template.clone();
                            value = window.InfoViz.options[todo[i]][item];
                            $(element).find('span.name').text(item);
                            $(element).find('input').attr('id', 'gv_' + todo[i].replace('-', '_') + item.replace('-', '_'));
                            $(element).find('input').attr('value', value);

                            if (typeof (value) === 'string' && value.indexOf('#') === 0) {
                                $(element).find('a.color-box').css('background', value);
                            }

                            $('.globalstyles ul.l-' + todo[i]).append(element);
                        }
                    }
                };

                reset();

                // Events.
                $('.globalstyles .controls .btn.save').off('click');

                $('.globalstyles .controls .btn.save').on('click', function (evt) {
                    save();
                    return false;
                });
            }
        });
    });
}());