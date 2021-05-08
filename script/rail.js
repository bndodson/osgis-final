/* globals Chart:false, feather:false */

(function() {
    'use strict'

    feather.replace()

    // Graphs
    var ctx = document.getElementById('chartRail').getContext('2d');
    var chartRail = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020'
            ],
            datasets: [{
                label: 'Atlanta, GA',
                data: [74236211, 70506376, 69905386, 71512588, 72910654, 69049736, 67840334, 65168178, 62076516, 24160976],
                backgroundColor: '#fff100'
            }, {
                label: 'Boston, MA-NH-RI',
                data: [270174531, 277441582, 278348525, 282263005, 266187194, 268015256, 257600261, 250613922, 247369946, 86880308],
                backgroundColor: '#bad80a'
            }, {
                label: 'Chicago, IL-IN',
                data: [297599459, 309069022, 306326140, 316095806, 317924502, 314439498, 304252104, 297741389, 283207407, 93775951],
                backgroundColor: '#00b294'
            }, {
                label: 'Los Angeles-Long Beach-Anaheim, CA',
                data: [109507007, 123092957, 128051364, 126460092, 120958877, 125290740, 127013353, 121589714, 105812191, 56095968],
                backgroundColor: '#00bcf2'
            }, {
                label: 'New York-Newark, NY-NJ-CT',
                data: [2883841588, 2938021192, 3037540313, 3146508930, 3058851663, 3081287401, 3102333329, 3037490483, 3141606016, 1257302472],
                backgroundColor: '#00188f'
            }, {
                label: 'Philadelphia, PA-NJ-DE-MD',
                data: [177133051, 176161323, 176846589, 174389854, 176782987, 169157443, 164146848, 163833230, 163561943, 64457817],
                backgroundColor: '#ec008c'
            }, {
                label: 'Portland, OR-WA',
                data: [46283738, 45044570, 43160415, 43251812, 43138924, 45605293, 44309754, 44138193, 42847276, 21333552],
                backgroundColor: '#68217a'
            }, {
                label: 'San Diego, CA',
                data: [36694624, 35279118, 38102558, 44035646, 45064757, 42273875, 41229640, 40977876, 41885780, 23481904],
                backgroundColor: '#e81123'
            }, {
                label: 'San Francisco-Oakland, CA',
                data: [185128530, 195606009, 198858331, 219172443, 217874636, 217498595, 211265141, 210599845, 207373377, 54980192],
                backgroundColor: '#009e49'
            }, {
                label: 'Washington, DC-VA-MD',
                data: [292335219, 283751812, 277926712, 275028129, 264378619, 237787542, 235719880, 233735374, 243828622, 70055560],
                backgroundColor: '#ff8c00'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]

            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    });
})()