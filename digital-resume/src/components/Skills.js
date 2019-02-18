import React from 'react';
import Resume from './Resume';
import {Bar} from 'react-chartjs-2';

class Skills extends Resume{
	constructor(props){
		super(props);

		this.addBaseColors('rgba(54, 162, 235, 0.2)');
		this.addBaseColors('rgb(191, 127, 63, 0.2)');
		this.addBaseColors('rgb(63, 191, 191, 0.2)');
		this.addBaseColors('rgb(13, 108, 32, 0.2)');
		this.addBaseColors('rgb(181, 49, 16, 0.2)');
		this.addBaseColors('rgb(203, 196, 194, 0.4)');
		this.addBaseColors('rgb(142, 139, 156, 0.6)');
		this.addBaseColors('rgb(139, 150, 156, 0.4)');
		this.addBaseColors('rgb(63, 191, 127, 0.5)');
		this.addBaseColors('rgba(77, 59, 75, 0.5)');
		this.addBaseColors('rgba(12, 38, 25, 0.5)');
		this.addBaseColors('rgba(100, 78, 69, 0.5)');
		this.addBaseColors('rgba(18, 15, 20, 0.5)');
		this.addBaseColors('rgba(16, 20, 15, 0.5)');

		this.addChartData({label:'PHP',data:3,backgroundColor:this.random_rgba()});
		this.addChartData({label:'SQL',data:3,backgroundColor:this.random_rgba()});
		this.addChartData({label:'MongoDB',data:2,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Laravel',data:1,backgroundColor:this.random_rgba()});
		this.addChartData({label:'WordPress',data:2,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Vanilla JS',data:3,backgroundColor:this.random_rgba()});
		this.addChartData({label:'jQuery',data:2,backgroundColor:this.random_rgba()});
		this.addChartData({label:'AngularJS',data:1.5,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Vagrant',data:2,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Docker',data:0.5,backgroundColor:this.random_rgba()});
		this.addChartData({label:'React',data:0.5,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Bootstrap',data:0.5,backgroundColor:this.random_rgba()});
		this.addChartData({label:'AWS',data:0.25,backgroundColor:this.random_rgba()});
		this.addChartData({label:'Python',data:0.25,backgroundColor:this.random_rgba()});
		
		this.state = {
			chartData:{
                labels: this.getLabels(),
				datasets: [
					{
                        label: 'Years of Experience',
						data: this.getValues(),
						backgroundColor: this.getColors()
					}
				]
			},
			chartOptions:{
    			scales: {
        			yAxes: [{
                        display: true,
                        ticks: {beginAtZero: true}
                        }
                    ],
					xAxes: [{
            			display: true,
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

export default Skills