import React from 'react';
import Resume from './Resume';
import {Bubble} from 'react-chartjs-2';
 
class Education extends Resume{
    constructor(props){
        super(props);

        var pointstyle = 'triangle';

        this.addChartData({label:'AWS',data:{x:9,y:9,r:10},backgroundColor:this.random_rgba()});
        this.addChartData({label:'Laravel',data:{x:8,y:8,r:10},backgroundColor:this.random_rgba()});
        this.addChartData({label:'React',data:{x:7,y:8,r:10},backgroundColor:this.random_rgba()});
        this.addChartData({label:'Python',data:{x:6,y:5,r:10},backgroundColor:this.random_rgba()});
        this.addChartData({label:'Docker',data:{x:5,y:2,r:10},backgroundColor:this.random_rgba()});
        this.addChartData({label:'API Development',data:{x:4,y:3,r:10},backgroundColor:this.random_rgba()});
        this.addChartData({label:'Software Architecture',data:{x:3,y:4,r:10},backgroundColor:this.random_rgba()});
        
        this.state = {
			chartData:{
				datasets: [
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    },
                    {
                        label:this.popLabels(),
                        data:[this.popValues()],
                        backgroundColor:this.popColors(),
                        pointStyle:pointstyle
                    }
                ]
			},
			chartOptions:{
                legend:{
                    display:false,
                },
    			scales: {
        			yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,max:11}
                        },
                    ],
					xAxes: [{
                        display: false,
                        ticks:  {beginAtZero: true,max:11}
        			}]
                }
			}

		}

    }
    render(){
        return(
            <div className="chart">
                <Bubble
					data={this.state.chartData}
					options={this.state.chartOptions}
				/>
            </div>
        )
    }
}

export default Education;
