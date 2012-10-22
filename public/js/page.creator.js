;(function() {
    'use strict';
    /*global seajs*/
    $(document).ready(function() {
        seajs.use(['/js/infoviz.js', '/js/infoviz.worldmap.js'], function(InfoViz) {
            var i, j, item, element, value, speed = 300;
            var current_chart_type;
            var pvtemplate = $('.globalstyles ul.l-layout li.normal').clone();
            var colortemplate = $('.globalstyles ul.l-layout li.color').clone();
            var global_style_height, chart_style_height;

            $('.styles ul.stylelist li').remove();

            //Logo is disabled by default.
            InfoViz.enable_logo();

            // Global option overwrite.
            InfoViz.global_option({
                'layout': { 'background-color': '#FFF', 'logo-url': '../images/infoviz_logo_tiny.png' }
            });

            var draw_chart = function (type) {
                var data = {};

                switch (type) {
                    case 'linechart': {
                        data = {
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
                                        { 'F1': 1, 'F2': 'A', 'F3': 3 },
                                        { 'F1': 42, 'F2': 'B', 'F3': 6 },
                                        { 'F1': 7, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 110, 'F2': 'D', 'F3': 12 }
                                    ]
                                },
                                'line2': {
                                    'name': 'Unite States',
                                    'data': [
                                        { 'F1': 13, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 10, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 72, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 1, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 4, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'line3': {
                                    'name': 'Unite Kingdom',
                                    'data': [
                                        { 'F1': 19, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 20, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 11, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 42, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'line4': {
                                    'name': 'Italy',
                                    'data': [
                                        { 'F1': 29, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 70, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 42, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 51, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 22, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'line5': {
                                    'name': 'Russia',
                                    'data': [
                                        { 'F1': 9, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 90, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 92, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 52, 'F2': 'E', 'F3': 6 }
                                    ]
                                }
                            }
                        };

                        break;
                    }
                    case 'barchart': {
                        data = {
                            'vertical_axis_name': 'Vertical',
                            'horizontal_axis_name': 'Horizontal',
                            'horizontal_field': 'F2',
                            'vertical_field': 'F1',
                            'tooltip_title': 'InfoViz {F2}, {F3}',
                            'tooltip_content': 'Tooltip: {F1}, {F2} | {F3}',
                            'data': {
                                'bar1': {
                                    'name': 'China',
                                    'data': [
                                        { 'F1': 1, 'F2': 'A', 'F3': 3 },
                                        { 'F1': 42, 'F2': 'B', 'F3': 6 },
                                        { 'F1': 7, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 110, 'F2': 'D', 'F3': 12 }
                                    ]
                                },
                                'bar2': {
                                    'name': 'Unite States',
                                    'data': [
                                        { 'F1': 13, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 10, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 72, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 1, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 4, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'bar3': {
                                    'name': 'Unite Kingdom',
                                    'data': [
                                        { 'F1': 19, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 20, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 11, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 42, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'bar4': {
                                    'name': 'Italy',
                                    'data': [
                                        { 'F1': 29, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 70, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 42, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 51, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 22, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'bar5': {
                                    'name': 'Russia',
                                    'data': [
                                        { 'F1': 9, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 90, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 92, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 52, 'F2': 'E', 'F3': 6 }
                                    ]
                                }
                            }
                        };

                        break;
                    }
                    case 'bubblechart': {
                        data = {
                            'vertical_axis_name': 'Vertical',
                            'horizontal_axis_name': 'Horizontal',
                            'horizontal_field': 'F1',
                            'vertical_field': 'F2',
                            'size_field': 'F3',
                            'label_field': 'F4',
                            'tooltip_title': 'InfoViz {F2}, {F3}',
                            'tooltip_content': 'Tooltip: {F1}, {F2} | {F3}',
                            'data': [
                                { 'F1': 1, 'F2': 18, 'F3': 6, 'F4': 'China' },
                                { 'F1': 42, 'F2': 30, 'F3': 9, 'F4': 'Unite States' },
                                { 'F1': 3, 'F2': 38, 'F3': 9, 'F4': 'Russia' },
                                { 'F1': 50, 'F2': 12, 'F3': 9, 'F4': 'Japan' },
                                { 'F1': 50, 'F2': 25, 'F3': 8, 'F4': 'Botswana' },
                                { 'F1': 29, 'F2': 22, 'F3': 4, 'F4': 'Finland' },
                                { 'F1': 2, 'F2': 3, 'F3': 3, 'F4': 'France' },
                                { 'F1': 38, 'F2': 10, 'F3': 6, 'F4': 'Cape Verde' },
                                { 'F1': 24, 'F2': 10, 'F3': 6, 'F4': 'Belize' },
                                { 'F1': 17, 'F2': 35, 'F3': 2, 'F4': 'Haiti' },
                                { 'F1': 10, 'F2': 4, 'F3': 5, 'F4': 'Georgia' },
                                { 'F1': 20, 'F2': 30, 'F3': 5, 'F4': 'Hungary' },
                                { 'F1': 10, 'F2': 22, 'F3': 8, 'F4': 'Laos' }
                            ]
                        };

                        break;
                    }
                    case 'stackchart': {
                        data = {
                            'vertical_axis_name': 'Vertical',
                            'horizontal_axis_name': 'Horizontal',
                            'horizontal_field': 'F2',
                            'vertical_field': 'F1',
                            'tooltip_title': 'InfoViz {F2}, {F3}',
                            'tooltip_content': 'Value: {F1}',
                            'data': {
                                'bar1': {
                                    'name': 'China',
                                    'data': [
                                        { 'F1': 10, 'F2': 'A', 'F3': 3 },
                                        { 'F1': 20, 'F2': 'B', 'F3': 6 },
                                        { 'F1': 30, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 40, 'F2': 'D', 'F3': 12 }
                                    ]
                                },
                                'bar2': {
                                    'name': 'Unite States',
                                    'data': [
                                        { 'F1': 40, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 30, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 20, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 10, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 15, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'bar3': {
                                    'name': 'Unite Kingdom',
                                    'data': [
                                        { 'F1': 20, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 30, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 10, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 40, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'bar4': {
                                    'name': 'Italy',
                                    'data': [
                                        { 'F1': 29, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 70, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 42, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 51, 'F2': 'D', 'F3': 3 },
                                        { 'F1': 22, 'F2': 'E', 'F3': 6 }
                                    ]
                                },
                                'bar5': {
                                    'name': 'Russia',
                                    'data': [
                                        { 'F1': 29, 'F2': 'A', 'F3': 15 },
                                        { 'F1': 50, 'F2': 'B', 'F3': 12 },
                                        { 'F1': 52, 'F2': 'C', 'F3': 9 },
                                        { 'F1': 52, 'F2': 'E', 'F3': 6 }
                                    ]
                                }
                            }
                        };

                        break;
                    }
                    case 'stockchart': {
                        data = {
                            'vertical_axis_name': 'Vertical',
                            'horizontal_axis_name': 'Horizontal',
                            'horizontal_field': 'F2',
                            'vertical_field': { 'min': 'F4', 'middle': 'F5', 'max': 'F6' },
                            'tooltip_title': 'InfoViz {F2}, {F3}',
                            'tooltip_content': 'Tooltip: max={F6}, middle={F5}, min={F4}',
                            'data': {
                                'bar1': {
                                    'name': 'China',
                                    'data': [
                                        { 'F1': 1, 'F2': 'A', 'F3': 3, 'F4': 1, 'F5': 2, 'F6': 5 },
                                        { 'F1': 42, 'F2': 'B', 'F3': 6, 'F4': 3, 'F5': 4, 'F6': 4 },
                                        { 'F1': 7, 'F2': 'C', 'F3': 9, 'F4': 2, 'F5': 3, 'F6': 4 },
                                        { 'F1': 110, 'F2': 'D', 'F3': 12, 'F4': 4, 'F5': 5, 'F6': 6 }
                                    ]
                                },
                                'bar2': {
                                    'name': 'Unite States',
                                    'data': [
                                        { 'F1': 13, 'F2': 'A', 'F3': 15, 'F4': 4, 'F5': 7, 'F6': 8 },
                                        { 'F1': 10, 'F2': 'B', 'F3': 12, 'F4': 9, 'F5': 12, 'F6': 13 },
                                        { 'F1': 72, 'F2': 'C', 'F3': 9, 'F4': 4, 'F5': 10, 'F6': 15 },
                                        { 'F1': 1, 'F2': 'D', 'F3': 3, 'F4': 6, 'F5': 9, 'F6': 18 },
                                        { 'F1': 4, 'F2': 'E', 'F3': 6, 'F4': 5, 'F5': 7, 'F6': 10 }
                                    ]
                                },
                                'bar3': {
                                    'name': 'Unite Kingdom',
                                    'data': [
                                        { 'F1': 19, 'F2': 'A', 'F3': 15, 'F4': 1, 'F5': 7, 'F6': 12 },
                                        { 'F1': 20, 'F2': 'B', 'F3': 12, 'F4': 2, 'F5': 8, 'F6': 15 },
                                        { 'F1': 11, 'F2': 'D', 'F3': 3, 'F4': 3, 'F5': 9, 'F6': 17 },
                                        { 'F1': 42, 'F2': 'E', 'F3': 6, 'F4': 4, 'F5': 10, 'F6': 11 }
                                    ]
                                },
                                'bar4': {
                                    'name': 'Italy',
                                    'data': [
                                        { 'F1': 29, 'F2': 'A', 'F3': 15, 'F4': 5, 'F5': 8, 'F6': 10 },
                                        { 'F1': 70, 'F2': 'B', 'F3': 12, 'F4': 8, 'F5': 10, 'F6': 12 },
                                        { 'F1': 42, 'F2': 'C', 'F3': 9, 'F4': 2, 'F5': 11, 'F6': 15 },
                                        { 'F1': 51, 'F2': 'D', 'F3': 3, 'F4': 4, 'F5': 7, 'F6': 17 },
                                        { 'F1': 22, 'F2': 'E', 'F3': 6, 'F4': 3, 'F5': 7, 'F6': 19 }
                                    ]
                                },
                                'bar5': {
                                    'name': 'Russia',
                                    'data': [
                                        { 'F1': 9, 'F2': 'A', 'F3': 15, 'F4': 1, 'F5': 5, 'F6': 13 },
                                        { 'F1': 90, 'F2': 'B', 'F3': 12, 'F4': 3, 'F5': 13, 'F6': 16 },
                                        { 'F1': 92, 'F2': 'C', 'F3': 9, 'F4': 5, 'F5': 15, 'F6': 18 },
                                        { 'F1': 52, 'F2': 'E', 'F3': 6, 'F4': 9, 'F5': 10, 'F6': 15 }
                                    ]
                                }
                            }
                        };

                        break;
                    }
                    case 'streamchart': {
                        var cache = [];
                        var count_fields = Math.floor(Math.random() * 10) + 30;
                        var count_series = Math.floor(Math.random() * 8) + 4;

                        for (i = 0; i < count_series; ++i) {
                            item = { 'F3': 'Stream No.' + i, 'data': [] };

                            for (j = 0; j < count_fields; ++j) {
                                item['data'].push({
                                    'F1': 'n' + j,
                                    'F2': Math.floor(Math.random() * 100) * i + 100 * j
                                });
                            }

                            cache.push(item);
                        }

                        data = {
                            'vertical_axis_name': 'Vertical',
                            'horizontal_axis_name': 'Horizontal',
                            'horizontal_field': 'F1',
                            'value_field': 'F2',
                            'stream_field': 'F3',
                            'tooltip_title': 'InfoViz {F3} {F1}',
                            'tooltip_content': 'Tooltip: {F2}',
                            'data': cache
                        };

                        break;
                    }
                    case 'piechart': {
                        data = {
                            'value_field': 'F2',
                            'label_field': 'F4',
                            'tooltip_title': 'InfoViz {F2}, {F3}',
                            'tooltip_content': 'Tooltip: {F1}, {F2} | {F3}',
                            'data': [
                                { 'F1': 1,   'F2': 9, 'F3': 9, 'F4': 'CHN' },
                                { 'F1': 42,  'F2': 9, 'F3': 6, 'F4': 'USA' },
                                { 'F1': 7,   'F2': 9, 'F3': 9, 'F4': 'RUS' },
                                { 'F1': 110, 'F2': 8, 'F3': 9, 'F4': 'CAN' },
                                { 'F1': 50,  'F2': 3, 'F3': 2, 'F4': 'FRA' },
                                { 'F1': 29,  'F2': 1, 'F3': 4, 'F4': 'VET' },
                                { 'F1': 2,   'F2': 1, 'F3': 1, 'F4': 'JPN' }
                            ]
                        };

                        break;
                    }
                    case 'radarchart': {
                        data = {
                            'value_fields': [ 'F1', 'F2', 'F3', 'F4', 'F5', 'F6' ],
                            'name_field': 'F7',
                            'tooltip_title': 'InfoViz {F2}, {F3}',
                            'tooltip_content': 'Tooltip: {F1}, {F2} | {F3}',
                            'value_maxs': [ 8, 8, 8, 8, 8, 8 ],
                            'value_mins': [ 1, 1, 1, 1, 1, 1 ],
                            'data': [
                                { 'F1': 7, 'F2': 7, 'F3': 7, 'F4': 7, 'F5': 7, 'F6': 7, 'F7': 'China' },
                                { 'F1': 6, 'F2': 6, 'F3': 6, 'F4': 6, 'F5': 6, 'F6': 6, 'F7': 'Unite States' },
                                { 'F1': 5, 'F2': 5, 'F3': 5, 'F4': 5, 'F5': 5, 'F6': 5, 'F7': 'Unite Kingdom' },
                                { 'F1': 4, 'F2': 4, 'F3': 4, 'F4': 4, 'F5': 4, 'F6': 4, 'F7': 'France' },
                                { 'F1': 3, 'F2': 3, 'F3': 3, 'F4': 3, 'F5': 3, 'F6': 3, 'F7': 'Japan' },
                                { 'F1': 2, 'F2': 2, 'F3': 2, 'F4': 2, 'F5': 2, 'F6': 2, 'F7': 'South Korea' },
                                { 'F1': 1, 'F2': 1, 'F3': 1, 'F4': 1, 'F5': 1, 'F6': 1, 'F7': 'Russia' }
                            ]
                        };

                        break;
                    }
                    case 'radialchart': {
                        data = {
                            'value_field': 'F1',
                            'label_field': 'F2',
                            'data': [
                                { 'F1': 3, 'F2': 'China' },
                                { 'F1': 6, 'F2': 'Unite States' },
                                { 'F1': 2, 'F2': 'Russia' },
                                { 'F1': 4, 'F2': 'Japan' },
                                { 'F1': 5, 'F2': 'Botswana' },
                                { 'F1': 3, 'F2': 'Finland' },
                                { 'F1': 1, 'F2': 'France' },
                                { 'F1': 2, 'F2': 'Cape Verde' },
                                { 'F1': 6, 'F2': 'Belize' },
                                { 'F1': 4, 'F2': 'Georgia' },
                                { 'F1': 2, 'F2': 'Haiti' },
                                { 'F1': 3, 'F2': 'Hungary' },
                                { 'F1': 6, 'F2': 'India' },
                                { 'F1': 4, 'F2': 'Laos' },
                                { 'F1': 3, 'F2': 'Kuwait' },
                                { 'F1': 6, 'F2': 'Namibia' },
                                { 'F1': 1, 'F2': 'Peru' }
                            ]
                        };

                        break;
                    }
                    case 'smithgraph': {
                        var cache = [];
                        var max_nodes = 256, max_edge = 6, max_value = 100;
                        for(i = 0; i < max_nodes; ++i) {
                            var edge_count = Math.floor(Math.random() * max_edge), edges = [];

                            for(j = 0; j < edge_count; ++j) {
                                edges.push({
                                    'to': 'item' + Math.floor(Math.random() * max_nodes),
                                    'F3': Math.floor(Math.random() * max_value)
                                });
                            }

                            cache.push({
                                'F1': 'item' + i,
                                'F2': Math.floor(Math.random() * max_value),
                                'F4': edges.length,
                                'edges': edges
                            });
                        }

                        data = {
                            'node_id_field': 'F1',
                            'node_label_field': 'F1',
                            'node_value_field': 'F2',
                            'edge_value_field': 'F3',
                            'node_tooltip_title': 'Node #{F1}',
                            'node_tooltip_content': 'Value: {F2}. Edges: {F4}.',
                            'data': cache
                        };

                        break;
                    }
                    case 'worldmap': {
                        var cache = [], factor = 0.3;
                        for (item in window.InfoViz.WorldMap.names) {
                            i = Math.random();
                            if (i >= factor) {
                                cache.push({
                                    'area': item,
                                    'F1': Math.floor(Math.random() * 500) + 500
                                });
                            }
                        }

                        data = {
                            'value_field': 'F1',
                            'tooltip_title': 'InfoViz: {area}',
                            'tooltip_content': '{area}: value = {F1}',
                            'data': cache
                        };

                        break;
                    }
                    case 'heatmap': {
                        var cache = [];
                        for(i = 0; i < 1024; ++i) {
                            item = Math.floor(Math.random() * 100);
                            cache.push({ 'F1': item, 'F2': i, 'F3': item });
                        }

                        data = {
                            'value_field': 'F1',
                            'label_field': 'F3',
                            'tooltip_title': 'InfoViz {F2}, {F3}',
                            'tooltip_content': 'Tooltip: {F1}, {F2} | {F3}',
                            'data': cache
                        }

                        break;
                    }
                    case 'basictree': {
                        data = {
                            'node_label_field': 'F1',
                            'node_value_field': 'F2',
                            'edge_value_field': 'F3',
                            'node_tooltip_title': 'Node #{F1}',
                            'node_tooltip_content': 'Value: {F1}.{F2}',
                            'edge_tooltip_title': 'Edge #{F1}',
                            'edge_tooltip_content': 'Value: {F2}.{F3}',
                            'data': {
                                'F1': 'Frankfurt', 'F2': 1, 'children': [
                                    {
                                        'F1': 'Mannheim', 'F2': 2, 'F3': 85, 'children': [
                                            {
                                                'F1': 'Karlsruhe', 'F2': 3, 'F3': 80, 'children': [
                                                    { 'F1': 'Augsburg', 'F2': 1, 'F3': 250 },
                                                    { 'F1': 'Augsburg', 'F2': 1, 'F3': 250 }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        'F1': 'Würzburg', 'F2': 3, 'F3': 217, 'children': [
                                            { 'F1': 'Erfurt', 'F2': 4, 'F3': 186 },
                                            { 'F1': 'Nürnberg', 'F2': 2, 'F3': 103 },
                                            { 'F1': 'Erfurt', 'F2': 4, 'F3': 186, 'children': [
                                                    { 'F1': 'München', 'F2': 5, 'F3': 167 }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        'F1': 'Kassel', 'F2': 2, 'F3': 173, 'children': [
                                            { 'F1': 'Stuggart', 'F2': 3, 'F3': 99, 'children': [
                                                    { 'F1': 'München', 'F2': 5, 'F3': 167 },
                                                    { 'F1': 'Augsburg', 'F2': 1, 'F3': 250 }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        };

                        break;
                    }
                    case 'tagcloud': {
                        data = {
                            'value_field': 'F1',
                            'text_field': 'F2',
                            'tooltip_title': 'InfoViz {F1}',
                            'tooltip_content': '{F2}: {F1}.',
                            'data': [
                                { 'F1': 24, 'F2': '中华人民共和国' },
                                { 'F1': 23, 'F2': '美利坚合众国' },
                                { 'F1': 22, 'F2': '俄罗斯联邦' },
                                { 'F1': 21, 'F2': '日本' },
                                { 'F1': 20, 'F2': '博茨瓦纳' },
                                { 'F1': 19, 'F2': '芬兰' },
                                { 'F1': 18, 'F2': '法兰西共和国' },
                                { 'F1': 17, 'F2': '佛得角' },
                                { 'F1': 16, 'F2': '伯利兹城' },
                                { 'F1': 15, 'F2': '格鲁吉亚' },
                                { 'F1': 14, 'F2': '海地' },
                                { 'F1': 13, 'F2': '匈牙利' },
                                { 'F1': 12, 'F2': '印度' },
                                { 'F1': 11, 'F2': '老挝人民民主共和国' },
                                { 'F1': 10, 'F2': '科威特' },
                                { 'F1': 9,  'F2': '纳米比亚' },
                                { 'F1': 8,  'F2': '秘鲁' },
                                { 'F1': 7,  'F2': '卡塔尔' },
                                { 'F1': 6,  'F2': '西班牙' },
                                { 'F1': 5,  'F2': '泰国' },
                                { 'F1': 4,  'F2': '乌克兰' },
                                { 'F1': 3,  'F2': '瓦努阿图' },
                                { 'F1': 2,  'F2': '赞比亚' },
                                { 'F1': 1,  'F2': '巴勒斯坦' }
                            ]
                        };

                        break;
                    }
                }

                InfoViz.chart('main_chart', type, data);
            };

            var change_chart_type = function (type) {
                if ($('ul.chart-list li.' + type).length > 0) {
                    $('ul.chart-list li').removeClass('active');
                    $('ul.chart-list li.' + type).addClass('active');
                    draw_chart(type);
                    current_chart_type = type;
                    load_type_styles(type);
                }
            };

            var load_type_styles = function (type) {
                console.log('load styles for: ' + type);
                $('.chartstyles ul.stylelist li').remove();

                var obj = window.InfoViz.options[type];
                if (obj && typeof(obj) === 'object') {
                    for (item in obj) {
                        if (!obj.hasOwnProperty(item)) {
                            continue;
                        }

                        element = pvtemplate.clone();
                        value = obj[item];
                        $(element).find('span.name').text(item);
                        $(element).find('input').attr('id', 'cv_' + item.replace('-', '_'));
                        $(element).find('input').attr('value', value);

                        if (typeof (value) === 'string' && value.indexOf('#') === 0) {
                            $(element).find('a.color-box').css('background', value);
                        }

                        $('.chartstyles ul.stylelist').append(element);
                    }

                    chart_style_height = $('.chartstyles div.container').height();

                    // Save button
                    $('.chartstyles .controls .btn.save').off('click');
                    $('.chartstyles .controls .btn.save').on('click', function (evt) {
                        var options = {};
                        options[type] = {};

                        for (item in obj) {
                            if (!obj.hasOwnProperty(item)) {
                                continue;
                            }

                            element = $('#cv_' + item.replace('-', '_'));
                            value = element.attr('value');

                            if (value === '') {
                                value = undefined;
                            }

                            if (obj[item] === true || obj[item] === false) {
                                value = !!value;
                            }

                            if (parseInt(value, 10).toString() !== 'NaN') {
                                value = parseInt(value, 10);
                            }

                            options[type][item] = value;
                        }

                        InfoViz.global_option(options);
                        InfoViz.clear('main_chart', true);
                        draw_chart(current_chart_type);

                        return false;
                    });
                }
            };

            var load_global_styles = function () {
                // Generate global style.
                if ($('ul.stylelist').length > 0) {
                    var todo = ['layout', 'grid', 'legend', 'tooltip'];
                    var color = 'color';

                    // Property-value setting
                    for (var i = 0; i < todo.length; ++i) {
                        for (item in window.InfoViz.options[todo[i]]) {
                            if (!window.InfoViz.options[todo[i]].hasOwnProperty(item)) {
                                continue;
                            }

                            element = pvtemplate.clone();
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

                    // Color setting
                    for (i = 0; i < window.InfoViz.options[color].length; ++i) {
                        item = window.InfoViz.options[color][i];
                        element = colortemplate.clone();
                        $(element).find('input.color').attr('id', 'gv_color_color' + i);
                        $(element).find('input.color').attr('value', item['color']);
                        $(element).find('a.color-box').css('background', item['color']);
                        $(element).find('input.dark').attr('id', 'gv_color_dark' + i);
                        $(element).find('input.dark').attr('value', item['dark-alpha']);
                        $(element).find('input.light').attr('id', 'gv_color_light' + i);
                        $(element).find('input.light').attr('value', item['light-alpha']);

                        $('.globalstyles ul.l-color').append(element);
                    }

                    // Save button
                    $('.globalstyles .controls .btn.save').off('click');
                    $('.globalstyles .controls .btn.save').on('click', function (evt) {
                        var options = {};
                        for (var i = 0; i < todo.length; ++i) {
                            options[todo[i]] = {};

                            for (item in window.InfoViz.options[todo[i]]) {
                                if (!window.InfoViz.options[todo[i]].hasOwnProperty(item)) {
                                    continue;
                                }

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
                        draw_chart(current_chart_type);

                        return false;
                    });
                }
            };

            var init_events = function () {
                // Events.
                $('ul.chart-list li').off('click');
                $('ul.chart-list li').on('click', function (evt) {
                    change_chart_type(evt.target.className);
                });

                $('.globalstyles h2.global').off('click');
                $('.globalstyles h2.global').on('click', function (evt) {
                    var element = $(evt.target).parent().find('div.container');

                    if (!global_style_height) {
                        global_style_height = element.height();
                    }

                    element.stop();
                    if (element.css('display') === 'none') {
                        element.show();
                        element.css('height', 0);
                        element.animate({ 'height': global_style_height }, speed);
                    } else {
                        element.animate({ 'height': 0 }, speed, function () {
                            element.hide();
                        });
                    }
                });

                $('.chartstyles h2.chart').off('click');
                $('.chartstyles h2.chart').on('click', function (evt) {
                    var element = $(evt.target).parent().find('div.container');
                    element.stop();
                    if (element.css('display') === 'none') {
                        element.show();
                        element.css('height', 0);
                        element.animate({ 'height': chart_style_height }, speed);
                    } else {
                        element.animate({ 'height': 0 }, speed, function () {
                            element.hide();
                        });
                    }
                });
            };

            change_chart_type('linechart');
            load_global_styles();
            init_events();
        });
    });
}());
