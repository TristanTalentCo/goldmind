
                                // Data for the next 6 tags of the polar chart
                                var barLabels2 = [
                                  "Ambiente Construido",
                                  "Humanidades",
                                  "Lenguas",
                                  "Artes",
                                  "Estudios Creativos",
                                  "C. Sociales"
                                ];
                                var barSeries2 = [8, 14, 9, 7, 11, 16];
                                var barColors2 = [
                                  "#A0522D",
                                  "#800020",
                                  "#FFA500",
                                  "#800080",
                                  "#FF00FF",
                                  "#E2725B"
                                ];
                                var barData2 = barLabels2.map(function(label, i) {
                                  return { label: label, value: barSeries2[i], color: barColors2[i] };
                                });
                                barData2.sort(function(a, b) { return b.value - a.value; });
                                barLabels2 = barData2.map(function(item) { return item.label; });
                                barSeries2 = barData2.map(function(item) { return item.value; });
                                barColors2 = barData2.map(function(item) { return item.color; });

                                 var barOptions2 = {
                                            chart: {
                                            type: 'bar',
                                            height: 400,
                                            width: 330,
                                            toolbar: { show: false }
                                            },
                                            series: [{
                                            data: barSeries2
                                            }],
                                            plotOptions: {
                                            bar: {
                                              horizontal: true,
                                              distributed: true,
                                              barHeight: '90%',
                                              borderRadius: 2
                                            }
                                            },
                                            colors: barColors2,
                                            xaxis: {
                                            categories: barLabels2,
                                            labels: { show: false }, // Hide x axis numbers
                                            axisTicks: { show: false }, // Hide x axis ticks
                                            axisBorder: { show: false } // Hide x axis border/ruler
                                            },
                                            yaxis: {
                                            labels: { style: { fontSize: '12px', fontFamily:'Poppins' } },
                                            reversed: true
                                            },
                                            dataLabels: {
                                            enabled: true,
                                            style: { fontSize: '14px' },
                                            formatter: function(val) {
                                              return val + ' pers.';
                                            }
                                            },
                                            grid: { show: false },
                                            tooltip: {
                                            enabled: true,
                                            theme: 'light', // Same as polar chart default
                                            style: {
                                              fontSize: '14px',
                                              fontFamily: undefined
                                            },
                                            y: {
                                              formatter: function (val) {
                                              return val + ' pers.';
                                              },
                                              title: {
                                              formatter: function () {
                                                return '';
                                              }
                                              }
                                            },
                                            marker: {
                                              show: true
                                            }
                                            },
                                            legend: { show: false } // Hide the legend
                                          };
                                var barChart2 = new ApexCharts(document.querySelector("#horizontalBarChart2"), barOptions2);
                                barChart2.render();
