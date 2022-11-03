/** @format */

// Gráfico 1 =====================================================================

const labels = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Uso de CPU (%)",
      backgroundColor: ["#576E97"],
      borderColor: ["#68BECB", "#576E97", "#578E97"],
      data: [0, 10, 45, 50, 30, 30, 51],
      fill: true,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

// Gráfico 2 =====================================================================

const labels2 = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const data2 = {
  labels: labels,
  datasets: [
    {
      label: "Uso de RAM (%)",
      backgroundColor: ["#576E97"],
      borderColor: ["#68BECB", "#576E97", "#578E97"],
      data: [80, 60, 30, 80, 20, 30, 60],
      fill: true,
    },
  ],
};

const config2 = {
  type: "line",
  data: data2,
  options: {},
};

// Gráfico 3 =====================================================================

const labels3 = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const data3 = {
  labels: labels,
  datasets: [
    {
      label: "Uso de CPU",
      backgroundColor: ["#576E97"],
      borderColor: ["#68BECB", "#576E97", "#578E97"],
      data: [0, 10, 5, 2, 20, 30, 50],
      fill: true,
    },
  ],
};

const config3 = {
  type: "line",
  data: data,
  options: {},
};

// Gráfico 2 =====================================================================

// const labels2 = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "Julho",
// ];

// const data2 = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Acessos",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       backgroundColor: ["#68BECB", "#576E97", "#578E97"],
//       borderColor: ["rgb(201, 203, 207)"],
//       borderWidth: 1,
//     },
//   ],
// };

// const config2 = {
//   type: "bar",
//   data: data2,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// };

//Gráfico 4 =====================================================================

const dataSuporte = {
  labels: ["CPU em uso (%)", "Não utilizado (%)"],
  datasets: [
    {
      label: "Dados",
      data: [80, 20],
      backgroundColor: ["#68BECB", "#576E97"],
      hoverOffset: 4,
    },
  ],
};

const configSuporte = {
  type: "pie",
  data: dataSuporte,
};

//Gráfico 5 =====================================================================

const dataSuporte2 = {
  labels: ["RAM em uso (%)", "RAM não utilizada (%)"],
  datasets: [
    {
      label: "Dados",
      data: [40, 60],
      backgroundColor: ["#68BECB", "#576E97", "#578E97"],
      hoverOffset: 4,
    },
  ],
};

const configSuporte2 = {
  type: "pie",
  data: dataSuporte2,
};

//Gráfico 6 =====================================================================

const dataSuporte3 = {
  labels: ["Chamados resolvidos", "Chamados não resolvidos"],
  datasets: [
    {
      label: "Dados",
      data: [16, 2],
      backgroundColor: ["#576E97", "#68BECB"],
      borderColor: ["#68BECB", "#576E97", "#68BECB"],
      hoverOffset: 4,
      fill: true,
    },
  ],
};

const configSuporte3 = {
  type: "doughnut",
  data: dataSuporte3,
};

//======================================================================

// const graficoGerente = new Chart(
//   document.getElementById("graficoGerente"),
//   config
// );
const graficoGerente2 = new Chart(
  document.getElementById("graficoGerente2"),
  config2
);

//=======================================================================

const graficoSuporte = new Chart(
  document.getElementById("graficoSuporte"),
  configSuporte
);
const graficoSuporte2 = new Chart(
  document.getElementById("graficoSuporte2"),
  configSuporte2
);

const graficoSuporte3 = new Chart(
  document.getElementById("graficoSuporte3"),
  configSuporte3
);

//=======================================================================

const graficoAdmin = new Chart(
  document.getElementById("graficoAdmin"),
  config3
);
