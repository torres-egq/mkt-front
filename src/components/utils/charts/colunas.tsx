import React from 'react';
import ReactApexChart from 'react-apexcharts';

class MyChartComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          options: {
            chart: {
              id: 'basic-bar'
            },
            xaxis: {
              categories: ['CAMPANHA 1', 'CAMPANHA 2', 'CAMPANHA 3', 'CAMPANHA 4']
            }
          },
          series: [{
            name: 'Projetos',
            data: [30, 40, 35, 50]
          }]
        }
    }

  render() {
    return (
    
        
          <div className="flex justify-center w-100">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" width="600" />
          </div>
       
  
    );
  }
}

export default MyChartComponent;
