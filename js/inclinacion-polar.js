
                              var options = {
                                chart: {
                                  type: 'polarArea',
                                  width: 550,
                                  height: 350,
                                  events: {
                                    mounted: function(chartContext, config) {
                                   // Remove old labels if any
                                      var polarChartDiv = document.getElementById('polarAreaChart');
                                      var customLabelDiv = polarChartDiv.querySelector('.apex-polar-custom-label');
                                      if (customLabelDiv) {
                                        customLabelDiv.parentNode.removeChild(customLabelDiv);
                                      }

                                      // Create container for custom labels
                                      customLabelDiv = document.createElement('div');
                                      customLabelDiv.className = 'apex-polar-custom-label';
                                      customLabelDiv.style.position = 'absolute';
                                      customLabelDiv.style.top = '0';
                                      customLabelDiv.style.left = '0';
                                      customLabelDiv.style.width = '100%';
                                      customLabelDiv.style.height = '100%';
                                      customLabelDiv.style.pointerEvents = 'none';
                                      polarChartDiv.style.position = 'relative';
                                      polarChartDiv.appendChild(customLabelDiv);

                                      // Get chart center and radius
                                      var chartEl = chartContext.el.querySelector('.apexcharts-inner');
                                      if (!chartEl) return;
                                      var rect = chartEl.getBoundingClientRect();
                                      var parentRect = polarChartDiv.getBoundingClientRect();
                                      var centerX = rect.left + rect.width / 2 - parentRect.left;
                                      var centerY = rect.top + rect.height / 2 - parentRect.top;
                                      var radius = Math.min(rect.width, rect.height) / 2 * 0.85;

                                      var labels = [
                                        "C. Salud",
                                        "C. Biologicas",
                                        "Economía",
                                        "Administración",
                                        "Ingeniería",
                                        "Tecnología",
                                        "Ambiente Construido",
                                        "Humanidades",
                                        "Lenguas",
                                        "Artes",
                                        "Estudios Creativos",
                                        "C. Sociales"
                                      ];
                                      var n = labels.length;
                                      var offset = (Math.PI * 2) / (2 * n);
                                      for (var i = 0; i < n; i++) {
                                        var angle = ((Math.PI * 2) / n) * i - Math.PI / 2 + offset;
                                        var x = centerX + Math.cos(angle) * (radius + 75);
                                        var y = centerY + Math.sin(angle) * (radius + 75);

                                        var labelDiv = document.createElement('div');
                                        labelDiv.className = 'apex-custom-polar-label';
                                        labelDiv.style.position = 'absolute';
                                        labelDiv.style.left = (x - 40) + 'px';
                                        labelDiv.style.top = (y - 10) + 'px';
                                        labelDiv.style.width = '80px';
                                        labelDiv.style.textAlign = 'center';
                                        labelDiv.style.fontSize = '14px';
                                        labelDiv.style.pointerEvents = 'none';
                                        labelDiv.style.color = '#333';
                                        labelDiv.innerText = labels[i];
                                        customLabelDiv.appendChild(labelDiv);
                                      }
                                    },
                                    updated: function(chartContext, config) {
                                      // Redraw labels on update
                                      if (typeof options.chart.events.mounted === 'function') {
                                        options.chart.events.mounted(chartContext, config);
                                      }
                                    }
                                  }
                                },
                                series: [21, 15, 18, 12, 25, 10, 8, 14, 9, 7, 11, 16],
                                labels: [
                                  "C. Salud",
                                  "C. Biologicas",
                                  "Economía",
                                  "Administración",
                                  "Ingeniería",
                                  "Tecnología",
                                  "Ambiente Construido",
                                  "Humanidades",
                                  "Lenguas",
                                  "Artes",
                                  "Estudios Creativos",
                                  "C. Sociales"
                                ],
                                colors: [
                                  "#4CAF50",
                                  "#808000",
                                  "#FFD700",
                                  "#607D8B",
                                  "#003366",
                                  "#00BFFF",
                                  "#A0522D",
                                  "#800020",
                                  "#FFA500",
                                  "#800080",
                                  "#FF00FF",
                                  "#E2725B"
                                ],
                                stroke: {},
                                fill: {
                                  opacity: 1
                                },
                                legend: {
                                  show: false
                                },
                                yaxis: {
                                  show: false
                                },
                                xaxis: {
                                  show: false,
                                  labels: {
                                    show: false
                                  },
                                  axisTicks: {
                                    show: false
                                  },
                                  axisBorder: {
                                    show: false
                                  }
                                },
                                grid: {
                                  show: false
                                },
                                tooltip: {
                                  y: {
                                    formatter: function(val) {
                                      return val + ' Personas';
                                    }
                                  }
                                }
                              };

                              var chart = new ApexCharts(document.querySelector("#polarAreaChart"), options);
                              chart.render();
