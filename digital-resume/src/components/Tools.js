import React from 'react';
import Resume from './Resume';
import {Pie} from 'react-chartjs-2';

class Tools extends Resume{
	constructor(props){
		super(props);
		this.addChartData({label:'Back-End Development',value:70,color:this.random_rgba()});
		this.addChartData({label:'Front-End Development',value:30,color:'rgba(18, 12, 38, 0.5)'});
		this.state = {
			chartData:{
				labels: this.getLabels(),
				datasets: [
					{
						data: this.getValues(),
						backgroundColor: this.getColors()
					}
				]
			},
			chartOptions:{
    			scales: {
        			yAxes: [{
            			display: false,
					}],
					xAxes: [{
            			display: false,
        			}]
    			}
			}

		}
	}
	render(){
		return(
			<div className="chart">
				<Pie
					data={this.state.chartData}
					options={this.state.chartOptions}
				/>
			</div>
		)
	}
}

export default Tools