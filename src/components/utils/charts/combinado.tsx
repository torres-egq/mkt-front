import React from 'react';
import ReactApexChart from 'react-apexcharts';

class GraficoCombinado extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'grafico-combinado'
                },
                xaxis: {
                    categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']
                }
            },
            series: [
                {
                    name: 'Vendas',
                    type: 'column',
                    data: [50, 60, 70, 80, 100]
                },
                {
                    name: 'Meta',
                    type: 'line',
                    data: [60, 60, 80, 80, 100]
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height={350}
                />
            </div>
        );
    }
}

export default GraficoCombinado;