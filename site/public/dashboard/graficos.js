/** @format */

// Gráfico 1 =====================================================================

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
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
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(255, 159, 64)",
        "rgba(255, 205, 86)",
        "rgba(75, 192, 192)",
        "rgba(54, 162, 235)",
        "rgba(153, 102, 255)",
        "rgba(201, 203, 207)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
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
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
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
