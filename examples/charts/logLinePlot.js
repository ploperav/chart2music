import { c2mChart } from "../../dist/index.mjs";

const colors = ["blue", "yellow", "red", "black", "green", "purple"];
const countries = ["Europe", "China", "Japan", "South Korea", "Nigeria"];

const years = [
    2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011,
    2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
    1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987,
    1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975,
    1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963,
    1962, 1961, 1960
].reverse();

const exchanges = [
    // Europe
    [
        0.929595, 0.845982, 0.876828, 0.893409, 0.847582, 0.887036, 0.90389,
        0.901896, 0.753941, 0.753234, 0.778848, 0.719219, 0.755883, 0.718968,
        0.683499, 0.730754, 0.797153, 0.805097, 0.804828, 0.885766, 1.060945,
        1.117587, 1.085899, 0.939475, 0.898283, 0.885013, 0.775139, 0.751091,
        0.833602, 0.844983, 0.769998, 0.811868, 0.788742, 0.916895, 0.856618,
        0.871883, 1.032229, 1.364917, 1.312188, 1.161248, 1.061841, 0.93657,
        0.74081, 0.743011, 0.796781, 0.890647, 0.915938, 0.838941, 0.884503,
        0.860969, 0.961163, 1.03793, 1.062566, 1.066723, 1.056342, 1.038772,
        1.038029, 1.036343, 1.035481, 1.03503, 1.035073, 1.037613, 1.049738
    ].reverse(),
    // China
    [
        6.538356, 6.449111, 6.900323, 6.911383, 6.618697, 6.758768, 6.644414,
        6.285394, 6.161199, 6.148014, 6.309354, 6.462422, 6.767809, 6.830745,
        6.948459, 7.60629, 7.973511, 8.188736, 8.27, 8.27, 8.27, 8.27, 8.27,
        8.27, 8.27, 8.27, 8.338246, 8.37001, 8.639406, 5.778435, 5.528751,
        5.334961, 4.793205, 3.770289, 3.731597, 3.731065, 3.461495, 2.944456,
        2.33291, 1.981201, 1.89837, 1.71044, 1.550821, 1.555, 1.6836, 1.857824,
        1.9414, 1.8598, 1.9612, 1.989416, 2.245067, 2.461809, 2.461809,
        2.461809, 2.461809, 2.461809, 2.461809, 2.461809, 2.461809, 2.461809,
        2.461809, 2.461809, 2.461809
    ].reverse(),
    // Jpaan
    [
        125.735634, 109.870103, 106.74129, 108.977442, 110.473675, 112.197108,
        108.654779, 121.079599, 105.81779, 97.617765, 79.75303, 79.702131,
        87.711075, 93.543611, 103.444399, 117.774224, 116.308359, 110.179007,
        108.157018, 115.930163, 125.140467, 121.449849, 107.745626, 113.72292,
        130.791656, 120.962173, 108.742601, 94.03227, 102.163925, 111.111153,
        126.675269, 134.529713, 144.796384, 137.982263, 128.139887, 144.571673,
        168.438211, 238.275294, 237.415294, 237.371329, 248.874639, 220.354266,
        226.238673, 218.905368, 210.145392, 268.10039, 296.255849, 296.58973,
        291.35129, 271.062774, 302.775913, 347.499479, 358.075981, 359.792502,
        360, 360, 360, 360, 360, 360, 360, 360, 360
    ].reverse(),
    // SK
    [
        1249.864066, 1145.505436, 1179.35719, 1166.277471, 1100.726341,
        1130.82345, 1160.496416, 1132.720611, 1053.047067, 1095.113793,
        1127.089744, 1108.155264, 1156.650834, 1276.004245, 1101.955893,
        929.096176, 955.011753, 1023.998178, 1144.722856, 1191.029383,
        1245.977503, 1289.767389, 1130.938112, 1188.630929, 1404.026103,
        954.484168, 794.334304, 764.285188, 805.127306, 804.129863, 783.323101,
        737.418014, 711.603948, 674.300605, 734.612342, 826.086314, 884.442725,
        872.320403, 808.063879, 776.392281, 732.023118, 697.295734, 628.683488,
        484, 484, 484, 484, 484, 404.4725, 398.321667, 392.894167, 347.1475,
        310.555833, 288.160833, 276.645, 270.516667, 271.3375, 266.400833,
        213.846667, 130, 130, 124.791667, 63.125
    ].reverse(),
    // Nigeria
    [
        415.865643, 398.57237, 375.615087, 357.907011, 360.931044, 333.365252,
        258.428162, 198.037129, 165.212232, 159.294324, 158.765348, 155.883482,
        151.170644, 149.455236, 118.806205, 125.666028, 128.432155, 132.180347,
        134.385241, 132.221175, 121.635743, 115.77807, 107.190916, 101.214753,
        21.588145, 24.200426, 22.6581, 20.600438, 20.675013, 22.823646,
        17.924682, 10.936803, 7.570239, 7.80286, 5.000741, 3.72533, 1.585301,
        0.835712, 0.808271, 0.789106, 0.746126, 0.728078, 0.56591, 0.604007,
        0.635272, 0.644701, 0.626601, 0.615502, 0.630282, 0.657895, 0.657895,
        0.712856, 0.714286, 0.714286, 0.714286, 0.714286, 0.714286, 0.714286,
        0.714286, 0.714286, 0.714286, 0.714286, 0.714286
    ].reverse(),
    // Russia
    [
        73.565344, 73.679809, 72.341358, 64.717979, 62.806241, 58.362768,
        66.982709, 61.339214, 38.565863, 31.872508, 31.10157, 29.413215,
        30.386309, 31.744176, 24.864452, 25.576698, 27.185838, 28.22143,
        28.788203, 30.756156, 31.327204, 29.244429, 28.569991, 26.986662,
        9.573003, 6.39656, 5.301869, 4.289536, 2.059183, 1.025744
        // 1993
    ].reverse()
];

const title = "Historic exchange rates";

export const logLinePlot = (canvas, cc) => {
    countries.map((name, index) => {
        return {
            label: name,
            backgroundColor: colors[index],
            borderColor: colors[index],
            data: exchanges[index],
            hoverRadius: 10
        };
    });
    const datasets = countries.map((name, index) => {
        return {
            label: name,
            backgroundColor: colors[index],
            borderColor: colors[index],
            data: exchanges[index],
            hoverRadius: 10
        };
    });
    const config = {
        type: "line",
        data: {
            labels: years,
            datasets
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: title
                },
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    type: "logarithmic"
                }
            }
        }
    };

    const myChart = new Chart(canvas, config);

    const { err } = c2mChart({
        type: "line",
        title,
        element: canvas,
        cc,
        axes: {
            x: {
                label: "Year"
            },
            y: {
                minimum: 0.001,
                label: "Amount equal to $1",
                type: "log10",
                format: (value) => numeral(value).format(0.0)
            }
        },
        data: Object.fromEntries(
            countries.map((name, index) => {
                return [
                    name,
                    exchanges[index].map((rate, index) => {
                        return {
                            x: years[index],
                            y: rate
                        };
                    })
                ];
            })
        ),
        options: {
            onFocusCallback: ({ slice, index }) => {
                myChart.setActiveElements([
                    { datasetIndex: countries.indexOf(slice), index }
                ]);
                myChart.update();
            }
        }
    });
    if (err) {
        console.error(err);
    }
};
