// // AREA CHART
// var areaChartOptions = {
//   series: [
//     {
//       name: "Followers",
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//   ],
//   chart: {
//     height: 120,
//     width: 120,
//     type: "area",
//     toolbar: {
//       show: false,
//     },
//   },

//   colors: ["#29BB89", "#29BB89"],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   markers: {
//     size: 0,
//   },
//   tooltip: {
//     shared: false,
//     intersect: false,
//   },
// };

// var areaChart = new ApexCharts(
//   document.querySelector("#follower-chart"),
//   areaChartOptions
// );
// areaChart.render();

var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
  ],
  chart: {
    type: "bar",
    height: 450,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
      borderRadius: 8,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#monthly-chart"), options);
chart.render();
