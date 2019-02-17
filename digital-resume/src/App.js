import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {

  constructor(props){
  	super(props);
  	this.header = <div className="row"><span className="main-header">Digital Resume - Ahsan Mirza</span></div>
  	this.initializeComponents();
  }

  initializeComponents() {
  	this.components = [];
  	this.components['Chart'] = <Chart />
  }

  renderComponent(component) {
  	return	<div className="container">
    			<div className="row">
    				<div className="col-lg-2 col-md-2 col-sm-12">
        			</div>
        			<div className="col-lg-8 col-md-8 col-sm-12 border-top border-bottom">
        				{this.components[component]}
        			</div>
        			<div className="col-lg-2 col-md-2 col-sm-12">
        			</div>
        		</div>
    		</div>
  }

  renderComponents() {
  	var componentsRenderList = [];
  	for(var run=0;run<this.components.length;run++){
  		componentsRenderList.push(this.renderComponent(this.components[run]));
  	}
  	return componentsRenderList;
  }

  render() {
    return (
      	<div className="container">
      		{this.header}
      		{this.renderComponent('Chart')}
      	</div>
    );
  }
}

export default App;
