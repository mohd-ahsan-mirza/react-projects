import React,{Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import { throwStatement } from '@babel/types';

class Graph extends Component{
    constructor(props){
        super(props);
        this.addInputForm = this.addInputForm.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCronExpressionChange = this.handleCronExpressionChange.bind(this);
        this.colorBase = [];
        this.intializeChart();
        this.addInputForm();
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
    random_minute() {
        var minute = Math.floor(Math.random() * 23)
        return minute
    }
    random_hour() {
        return Math.floor(Math.random() * 20)
    }
	isEqualDate(date,dateParameter) {
        return dateParameter.getDate() === date.getDate() && dateParameter.getMonth() === date.getMonth() && dateParameter.getFullYear() === date.getFullYear();
    }
    getDataobject(cron_object,date_start){
        var cron_expression = cron_object.cron_expression
        var color = this.random_rgba()

   		var dataSetObject = {}
   		dataSetObject.type = ''
   		dataSetObject.label = cron_object.cron_label
   		dataSetObject.fill = false
   		dataSetObject.lineTension = 0.0
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
        return dataSetObject;
    }
	intializeChart(){

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

        //var crons = [];
        
        //var demo_index = 1
        //crons.push({cron_label:"Demo "+demo_index, cron_expression: parser.parseExpression('5-6 * * * *',cron_options)});
        //crons.push({cron_label: "Demo "+demo_index, cron_expression: parser.parseExpression('20 7 * * *',cron_options)});
		//crons.push({cron_label: "Demo "+demo_index, cron_expression: parser.parseExpression('10 8-9 * * *',cron_options)});

		/*for(var run=0;run<crons.length;run++){
               dataSetArray.push(this.getDataobject(crons[run],date_start))

		}*/
		this.state = {
            date_start: date_start,
            cron_options: cron_options,
            //crons: crons,
            cron_names: [],
            cron_expressions: [],
            formInputs: [],
            xAxisValues: xAxisValues,
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
	handleNameChange(event) {
        var cron_names = this.state.cron_names;
        console.log(cron_names)
        var index = parseInt(event.target.getAttribute('index'));
        cron_names[index] = event.target.value
        this.setState({cron_names:cron_names})
    };
    handleCronExpressionChange(event) {
        var cron_expressions = this.state.cron_expressions;
        var index = parseInt(event.target.getAttribute('index'));
        cron_expressions[index] = event.target.value
        this.setState({cron_expressions:cron_expressions})
        this.chartData()
    }
    chartData(){
        this.setState({chartData: {labels:this.state.xAxisValues,datasets:[]}})
        var parser = require('cron-parser');
        var dataSetArray = []
        for(var run=0;run<this.state.cron_expressions.length;run++){
            dataSetArray.push(this.getDataobject({cron_label:this.state.cron_names[run],cron_expression: parser.parseExpression(this.state.cron_expressions[run],this.state.cron_options)},this.state.date_start))
        }
        this.setState({chartData: {labels:this.state.xAxisValues,datasets:dataSetArray}})
    }
    addInputForm(event) {
        var formInputArray = this.state.formInputs
        var index = formInputArray.length
        var cron_name_name = "name_"+index
        var cron_expression_name = "cron_expression_"+index
        var cron_names_array = this.state.cron_names.concat("");
        this.setState({cron_names: cron_names_array});
        var cron_expression_array = this.state.cron_expressions.concat("")
        this.setState({cron_expressions: cron_expression_array})
        formInputArray.push(<form action="" className="form-inline mt-3">
                    <div className="form-group w-50">
                        <input defaultValue="" index={index} name={cron_name_name} onChange={this.handleNameChange} type="text" className="form-control" placeholder="Cron Name" />
                    </div>
                    <div className="form-group w-50">    
                        <input index={index} name={cron_expression_name} onChange={this.handleCronExpressionChange} type="text" className="form-control"  placeholder="Cron expression" />   
                    </div>
                </form>)
        this.setState({formInputs: formInputArray})
    }
    removeInputform(event) {

    }
	render(){
		return(
			<div className="chart">
               {this.state.formInputs.map(function(formInput){return formInput})}
               <div className="mt-3 mb-3 text-center">
                    <button name="addInputForm" className="btn btn-info w-50" onClick={this.addInputForm}>Add Input form</button>
                </div>
                <div className="mt-3 mb-3 text-center">
                    <button name="plotGraph" className="btn btn-success w-50">Plot Graph</button>
                </div>
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