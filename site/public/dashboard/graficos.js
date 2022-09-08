/** @format */

// Gráfico 1 =====================================================================

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Acessos",
      backgroundColor: ["#576E97"],
      borderColor: ["#68BECB", "#576E97", "#578E97"],
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

// Gráfico 2 =====================================================================

const labels2 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Julho",
];

const data2 = {
  labels: labels,
  datasets: [
    {
      label: "Acessos",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: ["#68BECB", "#576E97", "#578E97"],
      borderColor: ["rgb(201, 203, 207)"],
      borderWidth: 1,
    },
  ],
};

const config2 = {
  type: "bar",
  data: data2,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// Gráfico 3 =====================================================================

const data3 = {
  labels: ["1", "2", "3"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: ["#68BECB", "#576E97", "#578E97"],
      hoverOffset: 4,
    },
  ],
};

const config3 = {
  type: "doughnut",
  data: data3,
};

const grafico = new Chart(document.getElementById("grafico"), config);
const grafico2 = new Chart(document.getElementById("grafico2"), config2);
const grafico3 = new Chart(document.getElementById("grafico3"), config3);
