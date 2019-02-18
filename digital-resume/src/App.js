import React, { Component } from 'react';
import './App.css';
import Tools from './components/Tools';
import Skills from './components/Skills';

class App extends Component {

  constructor(props){
  	super(props);
  	this.header = <div className="row border-bottom"><h1 className="main-header">Digital Resume - Ahsan Mirza</h1></div>
  	this.initializeComponents();
  }

  initializeComponents() {
  	this.components = [];
		this.components['Tools'] = {title:"Back-End VS Front-End Development",renderID:<Tools />}
		this.components['Skills'] = {title:"Technical Experience",renderID:<Skills />}
  }

  renderComponent(componentID) {
  	return	<div className="row">
    					<div className="col-lg-2 col-md-2 col-sm-12">
        			</div>
							<div className="col-lg-12 col-md-12 col-sm-12 text-center mt-3 mb-3">
								{this.components[componentID].title}
        			</div>
							<div className="col-lg-2 col-md-2 col-sm-12">
        			</div>
        			<div className="col-lg-8 col-md-8 col-sm-12 border-top border-bottom">
        				{this.components[componentID].renderID}
        			</div>
        			<div className="col-lg-2 col-md-2 col-sm-12">
        			</div>
        		</div>
	}
	
  render() {
    return (
      	<div className="container">
					{this.header}
					{this.renderComponent('Tools')}
					{this.renderComponent('Skills')}
					<footer class="page-footer font-small blue">
  					<div class="footer-copyright text-center py-3">© 2018 Copyright:
    					<a href="http://ahsanmirza.com"> Ahsan mirza</a>
  					</div>
					</footer>
      	</div>
    );
  }
}

export default App;
