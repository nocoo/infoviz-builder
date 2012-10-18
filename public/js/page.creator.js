;(function () {
    'use strict';
    /*global seajs*/
    seajs.use([ '/js/infoviz.js' ], function (InfoViz) {
        //Logo is disabled by default.
        InfoViz.enable_logo();

        // Global option overwrite.
        InfoViz.global_option({
            'layout': { 'background-color': '#FFF', 'logo-url': '../images/infoviz_logo_tiny.png' },
        });

        // Test1
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
            { 'legend': { 'margin-top': 0 } },
            function(info) { console.log(info); }
        );
    });
}());