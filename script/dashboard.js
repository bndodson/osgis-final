/* globals Chart:false, feather:false */

(function() {
    'use strict'

    feather.replace()

    // Graphs
    var ctx = document.getElementById('chartHero').getContext('2d');
    var chartHero = new Chart(ctx, {
        type: 'line',
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
                    label: "Rail",
                    data: [
                        4633101336,
                        4748759983,
                        4862712685,
                        5018557525,
                        4910062197,
                        4906963173,
                        4891389555,
                        4794996459,
                        4867827806,
                        1897738532
                    ],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: "Non-Rail",
                    data: [
                        5475263172,
                        5519221430,
                        5496083162,
                        5450280026,
                        5314997149,
                        5117374148,
                        4898605076,
                        4841242077,
                        4804381557,
                        2596504725
                    ],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#15396C',
                    borderWidth: 4,
                    pointBackgroundColor: '#15396C'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: true,
            }
        }
    });
})()