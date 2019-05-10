import React,{Component} from 'react';
import $ from 'jquery';

class Compare extends Component{
    constructor(props){
        super(props);
        this.state = {
            listOne : "",
            listTwo : "",
            result : ""
        }
        this.listOneArray = [];
        this.listTwoArray = [];
        this.resultArray = [];
        this.options = [];
        this.buttonColor = 'btn btn-info';
        this.options.push({id:"1", option:'Intersection',selected:false,button:<button id='button1' key="1" type='button' className={this.buttonColor} onClick={() => this.intersection()}>Intersection</button>});
        this.options.push({id:"2", option:'Disjunctive_Union',selected:false,button:<button id='button2' key="2" type='button' className={this.buttonColor} onClick={() => this.disjunctiveUnion()}>Disjunctive Union</button>});
    }
    intersection(){
        if(this.listOneArray.length<this.listTwoArray.length){
            this.resultArray = this.listOneArray.filter(value => -1 !== this.listTwoArray.indexOf(value))
        }
        else{
            this.resultArray = this.listTwoArray.filter(value => -1 !== this.listOneArray.indexOf(value))
        }
        this.setState({
            result : this.resultArray.join("\n")
        })
    }
    disjunctiveUnion(){
        let unique1 = this.listOneArray.filter((o) => this.listTwoArray.indexOf(o) === -1);
        let unique2 = this.listTwoArray.filter((o) => this.listOneArray.indexOf(o) === -1);
        this.resultArray = unique1.concat(unique2);
        this.setState({
            result : this.resultArray.join("\n")
        })
    }
    updateListOne(event) {
        event.preventDefault();
        this.setState({
            listOne : event.target.value,
        });
        this.listOneArray = event.target.value.split("\n");
        this.listOneArray = this.listOneArray.filter(function (el) {
            return el != "";
        });
        console.log(this.listOneArray.length)
    }
    updateListTwo(event) {
        event.preventDefault();
        this.setState({
            listTwo : event.target.value,
        });
        this.listTwoArray = event.target.value.split("\n");
        this.listTwoArray = this.listTwoArray.filter(function (el) {
            return el != "";
        });
        console.log(this.listTwoArray.length)
    }
    renderOption(option){
        return <div className="row mb-4">
                    <div className="col text-center">
                        {option.button}
                    </div>
                </div>
    }
    renderOptions(){
        return (
            this.options.map(option => {return this.renderOption(option);
        }));
    }
    resetResult(){
        this.resultArray = []
        this.setState({
            result: ""
        })
    }
    reset(){
        this.listOneArray = []
        this.listTwoArray = []
        this.setState({
            listOne: "",
            listTwo: ""
        })
        this.resetResult()
    }
    render(){
        return <form className="row">
                     <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12">List 1</h4>
                        <textarea value={this.state.listOne} onChange={(event) => this.updateListOne(event)} className="form-control col-lg-12 col-md-12 col-sm-12" rows="20"></textarea>
                    </div>
                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12">List 2</h4>
                        <textarea value={this.state.listTwo} onChange={(event) => this.updateListTwo(event)} className="form-control col-lg-12 col-md-12 col-sm-12" rows="20"></textarea>
                    </div>
                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12">Result</h4>
                        <textarea value={this.state.result} className="form-control col-lg-12 col-md-12 col-sm-12" rows="20" readOnly></textarea>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12 mb-4">Options</h4>
                        {this.renderOptions()}
                        <div className="row mb-4"><div className="col text-center"><button type='button' className='btn btn-success' onClick={() => this.reset()}>RESET</button></div></div>
                    </div>
        </form>
    }
}

export default Compare;