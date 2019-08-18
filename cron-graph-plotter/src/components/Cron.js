import React from 'react';
import Graph from './Graph';
import {Line} from 'react-chartjs-2';

class Cron extends Graph{
	constructor(props){
		super(props);

		var parser = require('cron-parser');
		
		var crons = [
					 {cron_label:"upload", cron_expression: parser.parseExpression('10 15 * * *')},
					 {cron_label: "cancel", cron_expression: parser.parseExpression('20 15 * * *')},
					];
		
		var dataSetArray= []
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
			while(this.isToday(interval)){
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
							unit: 'minute'
						},
						distribution: 'series'
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
  				/*datasets: [
    				{
						type: 'line',
      					label: 'upload.php',
      					fill: false,
      					lineTension: 0.1,
      					backgroundColor: 'rgba(75,192,192,0.4)',
      					borderColor: 'rgba(75,192,192,1)',
      					borderCapStyle: 'butt',
      					borderDash: [],
     			 		borderDashOffset: 0.0,
      					borderJoinStyle: 'miter',
      					pointBorderColor: 'rgba(75,192,192,1)',
      					pointBackgroundColor: '#fff',
      					pointBorderWidth: 10,
      					pointHoverRadius: 5,
      					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      					pointHoverBorderColor: 'rgba(220,220,220,1)',
      					pointHoverBorderWidth: 2,
      					pointRadius: 1,
      					pointHitRadius: 10,
						data: [{
							x: intervalOne.getHours(),
							y: intervalOne.getMinutes()
						}, {
							x: intervalTwo.getHours(),
							y: intervalTwo.getMinutes()
						}],
						options: {
							scales: {
								yAxes: [{
									type: 'time',
									time: {
										unit: 'minute'
									},
									distribution: 'series'
								}]
							}
						}
					},
  				]*/
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
  				options: {
					
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