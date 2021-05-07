/* globals Chart:false, feather:false */

(function() {
    'use strict'

    feather.replace()

    // Graphs
    var ctx = document.getElementById('chartRail').getContext('2d');
    var chartRail = new Chart(ctx, {
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
                    label: 'Albuquerque, NM',
                    data: [1242174, 1129303, 1082588, 1063217, 931324, 851409, 811421, 771602, 744050, 143462],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Anchorage, AK',
                    data: [115191, 145260, 156300, 164674, 178350, 187309, 192331, 199666, 203367, 31960],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Atlanta, GA',
                    data: [74236211, 70506376, 69905386, 71512588, 72910654, 69049736, 67840334, 65168178, 62076516, 24160976],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Austin, TX',
                    data: [469328, 601754, 815031, 777894, 837749, 810567, 825533, 807869, 671133, 278779],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Baltimore, MD',
                    data: [31848557, 33024577, 32787710, 31986161, 29023363, 27970113, 26644551, 24072215, 23013297, 8042910],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Boston, MA-NH-RI',
                    data: [270174531, 277441582, 278348525, 282263005, 266187194, 268015256, 257600261, 250613922, 247369946, 86880308],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Buffalo, NY',
                    data: [6973287, 6460209, 5058439, 4273515, 5218485, 4899621, 4560644, 4492168, 4404283, 2000000],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Charlotte, NC-SC',
                    data: [4796202, 4967336, 4977968, 5130489, 5142299, 5316457, 5280519, 7430941, 8987184, 3921893],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Chattanooga, TN-GA',
                    data: [355856, 372445, 385991, 399624, 441205, 481093, 492660, 490906, 495336, 159184],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Chicago, IL-IN',
                    data: [297599459, 309069022, 306326140, 316095806, 317924502, 314439498, 304252104, 297741389, 283207407, 93775951],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Cincinnati, OH-KY-IN',
                    data: [0, 0, 0, 0, 0, 330738, 578180, 485700, 531592, 168392],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Cleveland, OH',
                    data: [8432995, 9096874, 9321306, 8982994, 9047021, 8885919, 8019567, 7911549, 7151569, 3227446],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Dallas-Fort Worth-Arlington, TX',
                    data: [29360884, 30750463, 31572362, 32680210, 32951730, 32280024, 32612836, 31485900, 31411896, 18173901],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Denton-Lewisville, TX',
                    data: [214966, 424617, 519302, 577440, 558139, 535630, 481973, 409667, 387467, 144246],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Denver-Aurora, CO',
                    data: [20694715, 20639068, 23773843, 26363053, 25518578, 28902487, 31595715, 32941647, 34296677, 15418845],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Detroit, MI',
                    data: [0, 2298841, 2207333, 2357520, 2409894, 2165351, 3106791, 3147354, 2698599, 459537],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'El Paso, TX-NM',
                    data: [0, 0, 0, 0, 0, 0, 0, 70236, 272976, 68318],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Hartford, CT',
                    data: [614089, 624516, 900501, 934642, 853591, 828721, 786870, 597363, 660477, 157014],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Houston, TX',
                    data: [10787896, 11387090, 11279881, 13300551, 16489939, 18228011, 18808109, 18806354, 18409049, 10633194],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Jacksonville, FL',
                    data: [0, 945811, 1112360, 1221092, 1279008, 1194221, 967826, 843225, 770189, 273143],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Johnstown, PA',
                    data: [88460, 95584, 74055, 62737, 54881, 58431, 63613, 53024, 64541, 22311],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Kansas City, MO-KS',
                    data: [0, 0, 0, 0, 0, 1399344, 2057323, 2108348, 2228942, 786059],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Kenosha, WI-IL',
                    data: [43164, 40128, 38825, 44465, 45947, 51145, 45120, 39569, 36658, 3845],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Las Vegas-Henderson, NV',
                    data: [0, 4128134, 4024890, 4548311, 5082158, 4940323, 4816085, 0, 0, 0],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Little Rock, AR',
                    data: [100402, 104818, 92543, 99500, 95220, 64570, 95118, 42912, 126882, 17196],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Los Angeles-Long Beach-Anaheim, CA',
                    data: [109507007, 123092957, 128051364, 126460092, 120958877, 125290740, 127013353, 121589714, 105812191, 56095968],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Memphis, TN-MS-AR',
                    data: [1157427, 1492954, 1366026, 485131, 0, 0, 0, 302076, 366666, 101044],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Miami, FL',
                    data: [22243309, 32569637, 35302685, 36060891, 36168130, 35525702, 33146008, 32562357, 31619661, 15754018],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Milwaukee, WI',
                    data: [0, 0, 0, 0, 0, 0, 0, 156683, 760321, 261303],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Minneapolis-St. Paul, MN-WI',
                    data: [11104281, 11198514, 10950158, 16721206, 23726094, 23674796, 24604793, 25742944, 26067210, 10407975],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Morgantown, WV',
                    data: [0, 1363463, 2408935, 2299875, 2335375, 2083575, 2031521, 1585701, 1744629, 405835],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Nashville-Davidson, TN',
                    data: [281173, 264874, 243496, 258023, 273878, 283174, 299112, 298765, 293314, 77245],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'New Orleans, LA',
                    data: [6602396, 7228998, 8650376, 7457260, 7281648, 8074975, 8097699, 7747491, 5289326, 2014256],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'New York-Newark, NY-NJ-CT',
                    data: [2883841588, 2938021192, 3037540313, 3146508930, 3058851663, 3081287401, 3102333329, 3037490483, 3141606016, 1257302472],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Oklahoma City, OK',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 365678, 531726],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Orlando, FL',
                    data: [0, 0, 0, 616411, 972546, 887224, 851881, 1114859, 1571656, 749544],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Philadelphia, PA-NJ-DE-MD',
                    data: [177133051, 176161323, 176846589, 174389854, 176782987, 169157443, 164146848, 163833230, 163561943, 64457817],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Phoenix-Mesa, AZ',
                    data: [13161638, 14042008, 14226293, 14263662, 14759817, 16303599, 16268923, 15406410, 15060207, 8557187],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Pittsburgh, PA',
                    data: [7882986, 8992620, 8857679, 8775034, 8707451, 8354163, 8368822, 7920730, 7795965, 2608017],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Portland, ME',
                    data: [518483, 555196, 555947, 496643, 426828, 493452, 546056, 533949, 574692, 146402],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Portland, OR-WA',
                    data: [46283738, 45044570, 43160415, 43251812, 43138924, 45605293, 44309754, 44138193, 42847276, 21333552],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Sacramento, CA',
                    data: [12816310, 13586505, 13364617, 12701588, 11953072, 11805176, 11150668, 9801510, 10710049, 5329875],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Salt Lake City-West Valley City, UT',
                    data: [16938895, 19421608, 22798371, 24337460, 24349673, 23765873, 23677677, 22981884, 22321887, 10271888],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'San Diego, CA',
                    data: [36694624, 35279118, 38102558, 44035646, 45064757, 42273875, 41229640, 40977876, 41885780, 23481904],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'San Francisco-Oakland, CA',
                    data: [185128530, 195606009, 198858331, 219172443, 217874636, 217498595, 211265141, 210599845, 207373377, 54980192],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'San Jose, CA',
                    data: [10219464, 10483460, 10864913, 11366605, 11028467, 9926937, 8659796, 8535960, 8350771, 3175194],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'San Juan, PR',
                    data: [10769989, 11023723, 10993112, 10088183, 8505389, 7897414, 4835070, 5193328, 5234509, 1137544],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Santa Rosa, CA',
                    data: [0, 0, 0, 0, 0, 0, 289506, 717021, 717913, 247989],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Seattle, WA',
                    data: [12048088, 15393499, 16513980, 18143144, 19270832, 27863422, 31967815, 33706879, 34113689, 10674886],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'St. Louis, MO-IL',
                    data: [16505238, 17128317, 17395931, 17181985, 16081738, 15343956, 14115287, 13220212, 13087672, 6746245],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Stockton, CA',
                    data: [756719, 850992, 1021771, 1153875, 1255203, 1294688, 1322180, 1479150, 1491754, 399181],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Tampa-St. Petersburg, FL',
                    data: [383785, 301516, 296730, 275621, 286097, 294857, 308590, 521964, 936735, 439687],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Tucson, AZ',
                    data: [0, 0, 0, 583623, 993286, 911998, 892406, 907520, 873142, 394850],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Virginia Beach, VA',
                    data: [639031, 1651310, 1654104, 1604911, 1454979, 1391329, 1402316, 1462647, 1345122, 650306],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
                {
                    label: 'Washington, DC-VA-MD',
                    data: [292335219, 283751812, 277926712, 275028129, 264378619, 237787542, 235719880, 233735374, 243828622, 70055560],
                    lineTension: 0,
                    backgroundColor: 'transparent',
                    borderColor: '#FF6550',
                    borderWidth: 4,
                    pointBackgroundColor: '#FF6550'
                },
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
                display: false,
            }
        }
    });
})()