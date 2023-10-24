import React from 'react';
import ReactApexChart from 'react-apexcharts';

class HeatmapComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [{
                name: 'YouTube',
                data: this.generateData(24, { min: 10, max: 60 })
            }, {
                name: 'Facebook',
                data: this.generateData(24, { min: 10, max: 60 })
            }, {
                name: 'Instagram',
                data: this.generateData(24, { min: 10, max: 60 })
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'heatmap'
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
                title: {
                    text: 'Tráfego por Hora'
                },
                xaxis: {
                    type: 'category',
                    categories: Array.from({ length: 24 }, (_, i) => i + ":00")
                },
                yaxis: {
                    reversed: true
                }
            }
        }
    }

    // Função para gerar dados fictícios para o heatmap
    generateData(count, { min, max }) {
        let i = 0;
        let series = [];
        while (i < count) {
            const x = (i + ":00");
            const y = Math.floor(Math.random() * (max - min + 1) + min);

            series.push({ x, y });
            i++;
        }
        return series;
    }

    render() {
        return (
            <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="heatmap"
                height={350}
            />
        );
    }
}

export default HeatmapComponent;
