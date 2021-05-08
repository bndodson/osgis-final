/* globals Chart:false, feather:false */

(function() {
    'use strict'

    feather.replace()

    // Graphs
    var ctx = document.getElementById('chartBus').getContext('2d');
    var chartBus = new Chart(ctx, {
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
                    label: 'Baltimore, MD',
                    data: [87378290, 76035907, 79868847, 85428523, 86610944, 83917075, 77015429, 74220748, 73648860, 45484833],
                    backgroundColor: '#bad80a'
                }, {
                    label: 'Boston, MA-NH-RI',
                    data: [128235903, 131451133, 129810714, 140286126, 140873635, 132907576, 130148828, 127229439, 126249938, 64894759],
                    backgroundColor: '#fff100'
                },
                {
                    label: 'Chicago, IL-IN',
                    data: [348981827, 355038614, 341387596, 316497247, 312929184, 296070843, 286327597, 277640151, 271012553, 138687104],
                    backgroundColor: '#00b294'
                },
                {
                    label: 'Los Angeles-Long Beach-Anaheim, CA',
                    data: [555604959, 556839442, 556700925, 544137455, 512260082, 465421119, 436316251, 425778878, 422200460, 236151091],
                    backgroundColor: '#00bcf2'
                },
                {
                    label: 'Miami, FL',
                    data: [131840835, 135612639, 136102282, 133214965, 124101878, 109903697, 99368731, 92959080, 90564269, 57372748],
                    backgroundColor: '#00188f'
                },
                {
                    label: 'New York-Newark, NY-NJ-CT',
                    data: [1230612678, 1240106017, 1244283840, 1236439843, 1205894812, 1208614956, 1149234737, 1157934945, 1152750212, 641135552],
                    backgroundColor: '#e81123'
                },
                {
                    label: 'Philadelphia, PA-NJ-DE-MD',
                    data: [181377595, 195293472, 202781322, 193047677, 195817494, 188183479, 179248153, 172880643, 167373515, 81826967],
                    backgroundColor: '#009e49'
                },
                {
                    label: 'Seattle, WA',
                    data: [177133051, 176161323, 176846589, 174389854, 176782987, 169157443, 164146848, 163833230, 163561943, 64457817],
                    backgroundColor: '#ec008c'
                },
                {
                    label: 'San Francisco-Oakland, CA',
                    data: [178619065, 181227920, 185062057, 189516956, 190975299, 191179145, 191891515, 193002452, 190876257, 91823728],
                    backgroundColor: '#68217a'
                },
                {
                    label: 'Washington, DC-VA-MD',
                    data: [191275669, 194852891, 197102651, 196507473, 190338767, 181043994, 175504013, 173046088, 177143054, 82765894],
                    backgroundColor: '#ff8c00'
                }
            ]
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