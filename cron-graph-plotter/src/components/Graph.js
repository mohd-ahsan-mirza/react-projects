import React,{Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import {Cron} from './Cron'

class Graph extends Component{
	constructor(props){
        super(props);
        this.colorBase = [];
		this.addChartData();
	}
	shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = a[i];
				a[i] = a[j];
				a[j] = x;
		}
		return a;
	}
	random_rgba() {
		if(this.colorBase.length == 0){
				var num = Math.round(0xffffff * Math.random());
				var r = num >> 16;
				var g = num >> 8 & 255;
				var b = num & 255;
				return 'rgb(' + r + ', ' + g + ', ' + b + ')';
		}else{
				this.colorBase = this.shuffle(this.colorBase);
				return this.colorBase.pop();
		}
	}
	isEqualDate(date,dateParameter) {
        return dateParameter.getDate() === date.getDate() && dateParameter.getMonth() === date.getMonth() && dateParameter.getFullYear() === date.getFullYear();
    }
	addChartData(){

		var today = new Date();
		var date_start = new Date();
		date_start.setDate(today.getDate()+1);
		date_start.setHours(0,0,0,0);

		var parser = require('cron-parser');
		var cron_options = {
			currentDate: date_start,
		};


		var dataSetArray= []
		
		var xAxisValues = []
		for(var run=0;run<25;run++){
			xAxisValues.push(run);
		}

		var crons = [
			{cron_label:"upload", cron_expression: parser.parseExpression('19-20 6 * * *',cron_options)},
			{cron_label: "cancel", cron_expression: parser.parseExpression('20 7 * * *',cron_options)},
			{cron_label: "notification", cron_expression: parser.parseExpression('0 8-9 * * *',cron_options)},
			{cron_label: "process", cron_expression: parser.parseExpression('* * * * *',cron_options)},
		];

		for(var run=0;run<crons.length;run++){
   			var cron_expression = crons[run].cron_expression
   			var color = this.random_rgba()

   			var dataSetObject = {}
   			dataSetObject.type = ''
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
   			//console.log(interval)
   			//By Default graph plotted will be for tomorrow
   			while(this.isEqualDate(date_start,interval)){
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
			   			},
			   			distribution: 'series',
		   			}]
	   			},
	   			responsive: true,
   			}
   			dataSetArray.push(dataSetObject)

		}
		this.state = {
			chartData:{
				labels:xAxisValues,
				datasets: dataSetArray,
			},
			chartOptions:{
    			scales: {
        			yAxes: [{
						stacked: false,
  						ticks: {
    						beginAtZero: true,
    						min: 0,
							max: 60
						}
					}],
					xAxes: [{
						stacked: false,
  						ticks: {
    						beginAtZero: true,
    						min: 0,
							max: 24
						}
        			}]
				},
				tooltips: {
					callbacks: {
						title: function(tooltipItem, data) {
							var dataset = data.datasets[tooltipItem[0].datasetIndex]
							return dataset.label
						},
						label: function(tooltipItem, data) {
							//console.log(tooltipItem)
							//console.log(data)
							var dataset = data.datasets[tooltipItem.datasetIndex]
							var hour=dataset.data[tooltipItem.index].x
							var hour_period = "am"
							if(hour > 11){
								hour_period = "pm"
							}
							var minute = tooltipItem.value
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
	handleChange(event) {
		var cron = event.target.value
		if(cron.length == 5){
			//this.addChartData(cron)
		}
		
	};
	render(){
		return(
			<div className="chart">
				<form>
         			<label>Cron</label>
         			<input
           				type="text"
           				maxLength="5"
           				onChange={this.handleChange}
         			/>
       			</form>
				<Scatter
					data={this.state.chartData}
					width={70}
  					height={30}
					options={this.state.chartOptions}
				/>
			</div>
		)
	}
	
}

export default Graph