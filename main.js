function generateChart(data) {
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [
        {
          pointRadius: 4,
          pointBackgroundColor: "rgb(0,0,255)",
          data: data,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        // xAxes: [{ ticks: { min: 40, max: 160 } }],
        // yAxes: [{ ticks: { min: 0, max: 20 } }],
      },
    },
  });
}

var xyValues = [
  { x: 50, y: 12 },
  { x: 60, y: 8 },
  { x: 70, y: 8 },
  { x: 80, y: 9 },
  { x: 90, y: 9 },
  { x: 100, y: 9 },
  { x: 110, y: 10 },
  { x: 120, y: 11 },
  { x: 130, y: 14 },
  { x: 140, y: 14 },
  { x: 150, y: 15 },
];

generateChart(xyValues);

document.getElementById("go").addEventListener("click", () => {
  const valor = parseInt(document.getElementById("valor").value);
  const valor1 = parseInt(document.getElementById("valor1").value);
  const valor2 = parseInt(document.getElementById("valor2").value);

  console.log({ valor }, { valor1 }, { valor2 });

  const values = [
    { x: 50, y: valor },
    { x: 60, y: valor1 },
    { x: 70, y: valor2 },
  ];

  generateChart(values);
});
