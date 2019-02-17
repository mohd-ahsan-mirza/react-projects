import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props){
		super(props);
		this.state = {
			chartData:{
				labels: ['Toronto','Calgary','Vancouver'],
				datasets: [
					{
						label: 'Population',
						data: [
							500000,
							600000,
							700000
						],
						backgroundColor:[
							'red',
							'red',
							'red'
						]
					}
				]
			},
			chartOptions:{
    			scales: {
        			yAxes: [{
            			ticks: {
                			beginAtZero: true
            			}
        			}]
    			}
			}

		}
	}
	render(){
		return(
			<div className="chart">
				<Bar
					data={this.state.chartData}
					options={this.state.chartOptions}
				/>
			</div>
		)
	}
}

export default Chart