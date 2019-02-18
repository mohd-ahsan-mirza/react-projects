import React from 'react';
import Resume from './Resume';
import {Pie} from 'react-chartjs-2';

class Routine extends Resume{
	constructor(props){
		super(props);
		this.addChartData({label:'Eat a bagle',data:5,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Error Analysis/Bug fixes',data:30,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Coding',data:30,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Sprint Planning/Meetings',data:10,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Responding to emails/requests',data:5,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Putting out fires',data:15,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Coffee',data:5,backgroundColor:this.random_rgba()});
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

export default Routine