
                                // Data for the first 6 tags of the polar chart
                                var barLabels = [
                                  "C. Salud",
                                  "C. Biologicas",
                                  "Economía",
                                  "Administración",
                                  "Ingeniería",
                                  "Tecnología"
                                ];
                                var barSeries = [21, 15, 18, 12, 25, 10];
                                var barColors = [
                                  "#4CAF50",
                                  "#808000",
                                  "#FFD700",
                                  "#607D8B",
                                  "#003366",
                                  "#00BFFF"
                                ];
                                // Sort the bars in descending order
                                var barData = barLabels.map(function(label, i) {
                                  return { label: label, value: barSeries[i], color: barColors[i] };
                                });
                                barData.sort(function(a, b) { return b.value - a.value; });
                                barLabels = barData.map(function(item) { return item.label; });
                                barSeries = barData.map(function(item) { return item.value; });
                                barColors = barData.map(function(item) { return item.color; });

                                var barOptions = {
                                  chart: {
                                  type: 'bar',
                                  height: 400,
                                  width: 330,
                                  toolbar: { show: false }
                                  },
                                  series: [{
                                  data: barSeries
                                  }],
                                  plotOptions: {
                                  bar: {
                                  horizontal: true,
                                  distributed: true,
                                  barHeight: '90%',
                                  borderRadius: 2
                                  }
                                  },
                                  colors: barColors,
                                  xaxis: {
                                  categories: barLabels,
                                  labels: { show: false }, // Hide x axis numbers
                                  axisTicks: { show: false }, // Hide x axis ticks
                                  axisBorder: { show: false } // Hide x axis border/ruler
                                  },
                                  yaxis: {
                                  labels: { style: { fontSize: '12px', fontFamily:'Poppins' } }
                                  },
                                  dataLabels: {
                                  enabled: true,
                                  style: { fontSize: '14px' }
                                  },
                                  grid: { show: false },
                                  tooltip: {
                                  enabled: true,
                                  y: {
                                  formatter: function (val) {
                                  return val + ' Personas';
                                  },
                                  title: {
                                    formatter: function () {
                                    return '';
                                    }
                                  }
                                  }
                                  },
                                  legend: { show: false } // Hide the legend
                                };
                                var barChart = new ApexCharts(document.querySelector("#horizontalBarChart"), barOptions);
                                barChart.render();
