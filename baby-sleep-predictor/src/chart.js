function createChart(data) {
    const plot = Plot.plot({
        marks: [
            Plot.line(data, { x: "time", y: "sleepDuration", stroke: "sleepQuality" }),
            Plot.dot(data, { x: "time", y: "sleepDuration", fill: "sleepQuality" })
        ],
        x: {
            label: "Time (hours)",
            tickFormat: d => `${d}h`
        },
        y: {
            label: "Sleep Duration (hours)",
            tickFormat: d => `${d}h`
        },
        color: {
            legend: true,
            label: "Sleep Quality"
        }
    });

    document.getElementById("chart").appendChild(plot);
}

export { createChart };