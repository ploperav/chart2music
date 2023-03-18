import { c2mChart } from "../../dist/index.mjs";
import numeral from "numeral";
import { Chart, ChartTypeRegistry } from "chart.js";

const barLineLabels = [
    "June 1",
    "June 2",
    "June 3",
    "June 6",
    "June 7",
    "June 8",
    "June 9",
    "June 10"
];
const adjClose = [
    148.71, 151.21, 145.38, 146.14, 148.71, 147.96, 142.96, 137.13
];
const volume = [
    74286600, 72348100, 88471400, 71598400, 67808200, 53950200, 69473000,
    91437000
];

export const config = {
    type: "bar" as keyof ChartTypeRegistry,
    data: {
        labels: barLineLabels,
        datasets: [
            {
                label: "Adjusted close",
                data: adjClose,
                backgroundColor: "red",
                hoverBorderWidth: 5,
                yAxisID: "y",
                type: "line"
            },
            {
                label: "Volume",
                data: volume,
                backgroundColor: "lightblue",
                hoverBorderWidth: 5,
                yAxisID: "y1"
            }
        ]
    },
    options: {
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: "AAPL"
            }
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                label: "Adjusted close ($)",
                min: 130
            },
            y1: {
                type: "linear",
                display: true,
                position: "right",
                label: "Volume",
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }
};

export const callback = (myChart: Chart, element: HTMLCanvasElement, cc: HTMLDivElement) => {
    const { err } = c2mChart({
        type: ["bar", "line"],
        title: "AAPL Trades",
        element,
        cc,
        axes: {
            x: {
                label: "Day",
                valueLabels: barLineLabels
            },
            y: {
                label: "Adjusted Close",
                format: (value: number) => numeral(value).format("$0,0[.]00")
            },
            y2: {
                label: "Volume",
                format: (value: number) => numeral(value).format("0.0 a")
            }
        },
        data: {
            "Adjusted Close": adjClose.map((y, x) => {
                return {
                    x,
                    y,
                    custom: 0
                };
            }),
            Volume: volume.map((y2, x) => {
                return {
                    x,
                    y2,
                    custom: 1
                };
            })
        },
        options: {
            onFocusCallback: ({ point, index }) => {
                myChart.setActiveElements([
                    { datasetIndex: point.custom, index }
                ]);
            },
            onSelectCallback: ({ index }) => {
                alert(
                    `${barLineLabels[index]} - ${adjClose[index]}, ${volume[index]}`
                );
            }
        }
    });
    if (err) {
        console.error(err);
    }
};
