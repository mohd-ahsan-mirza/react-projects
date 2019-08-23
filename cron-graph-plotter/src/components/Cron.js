import React from 'react';
import Graph from './Graph';
import {Line} from 'react-chartjs-2';

class Cron extends Graph{
	constructor(props){
		super(props);

		var parser = require('cron-parser');
		
		var crons = [
					 {cron_label:"upload", cron_expression: parser.parseExpression('19 6 * * *')},
					 {cron_label: "cancel", cron_expression: parser.parseExpression('20 15 * * *')},
					 {cron_label: "notification", cron_expression: parser.parseExpression('0 20 * * *')},
					];
		
		var dataSetArray= []

		// To set Y-axis to 60min
		// var initialDataSetObject = {}
		// initialDataSetObject.data = []
		// var initialDataObject = {}
		// initialDataObject.type = 'line'
		// initialDataObject.label = 'Max time'
		// initialDataObject.x = 0
		// initialDataObject.y = 60
		// initialDataSetObject.data.push(initialDataObject)
		// initialDataSetObject.options = {
		// 	scales: {
		// 		yAxes: [{
		// 			type: 'time',
		// 			time: {
		// 				unit: 'minute',
		// 				max:60,
		// 			},
		// 			distribution: 'series',
		// 		}]
		// 	}
		// }
		// dataSetArray.push(initialDataSetObject)
		
		for(run=0;run<crons.length;run++){
			var cron_expression = crons[run].cron_expression
			var color = this.random_rgba()

			var dataSetObject = {}
			dataSetObject.type = 'line'
			dataSetObject.label = crons[run].cron_label
			dataSetObject.fill = false
			dataSetObject.lineTension = 0.1
			dataSetObject.backgroundColor = color
			dataSetObject.borderColor =  color
			dataSetObject.borderCapStyle = 'butt'
			dataSetObject.borderDash = []
			dataSetObject.borderDashOffset = 0.0
			dataSetObject.borderJoinStyle = 'miter'
			dataSetObject.pointBorderColor = color
			dataSetObject.pointBackgroundColor = '#fff'
			dataSetObject.pointBorderWidth = 10
			dataSetObject.pointHoverRadius = 5
			dataSetObject.pointHoverBackgroundColor = color
			dataSetObject.pointHoverBorderColor = 'rgba(220,220,220,1)'
			dataSetObject.pointHoverBorderWidth = 2
			dataSetObject.pointRadius = 1
			dataSetObject.pointHitRadius = 10
			dataSetObject.pointHitDetectionRadius = 2
			dataSetObject.data = []
			var interval = new Date(cron_expression.next())
			var today = new Date();
			var tomorrow = new Date();
			tomorrow.setDate(today.getDate()+1);
			//By Default graph plotted will be for tomorrow
			while(this.isEqualDate(tomorrow,interval)){
				var dataObject = {}
				dataObject.x = interval.getHours()
				dataObject.y = interval.getMinutes()
				dataSetObject.data.push(dataObject)
				interval = new Date(cron_expression.next())
			}
			dataSetObject.options = {
				scales: {
					yAxes: [{
						type: 'time',
						time: {
							unit: 'minute',
							max:60,
						},
						distribution: 'series',
					}]
				}
			}
			dataSetArray.push(dataSetObject)
		}

		var xAxisValues = []
		for(var run=0;run<25;run++){
			xAxisValues.push(run);
		}

		this.state = {
			chartData:{
				labels:xAxisValues,
				datasets: dataSetArray,
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
				},
				tooltips: {
					callbacks: {
						title: function(tooltipItem, data) {
							var dataset = data.datasets[tooltipItem[0].datasetIndex]
							return dataset.label
						},
						label: function(tooltipItem, data) {
							var dataset = data.datasets[tooltipItem.datasetIndex]
							var hour=dataset.data[0].x
							var hour_period = "am"
							if(hour > 11){
								hour_period = "pm"
							}
							var minute = dataset.data[0].y
							if (/^\d$/.test(minute))  {
								minute = "0" + minute
							  }
							return hour + ":" + minute + " " + hour_period
						}
					}
				}
			}
		}
	}
	render(){
		return(
			<div className="chart">
				<Line
					data={this.state.chartData}
					width={100}
  					height={50}
					options={this.state.chartOptions}
				/>
			</div>
		)
	}
}

export default Cron