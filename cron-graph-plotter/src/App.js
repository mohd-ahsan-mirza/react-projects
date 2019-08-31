import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';

class App extends Component {

  constructor(props){
  	super(props);
  	this.header = <div className="row border-bottom"><h1 className="main-header">Cron Plotter - Ahsan Mirza</h1></div>
  	this.initializeComponents();
  }

  initializeComponents() {
  	this.components = [];
		this.components['Graph'] = {renderID:<Graph />}
  }

  renderComponent(componentID) {
  	return	<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 text-center mt-3 mb-3">
						{this.components[componentID].title}
        			</div>
        			<div className="col-lg-12 col-md-12 col-sm-12 border-top border-bottom">
        				{this.components[componentID].renderID}
        			</div>
        		</div>
	}
	
  render() {
    return (
      	<div className="container">
					{this.header}
					{this.renderComponent('Graph')}
					<footer className="page-footer font-small blue">
  					<div className="footer-copyright text-center py-3">© 2019 Copyright:
    					<a href="http://ahsanmirza.com"> Ahsan mirza</a>
  					</div>
					</footer>
      	</div>
    );
  }
}

export default App;
