import React,{Component} from 'react';
import $ from 'jquery';

class Manipulator extends Component{
    constructor(props){
        super(props); 

        this.state = {
            originalList : "",
            manipulatedList : "",
        };

        this.originalListArray = [];
        this.manipulatedlistArray = [];

        this.notSelected = 'btn btn-info';
        this.isSelected = 'btn btn-danger';


        this.options = [];
        this.options.push({id:"1", option:'"',selected:false,button:<button id='button1' key="1" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("1")}>""</button>});
        this.options.push({id:"2", option:"'",selected:false,button:<button id='button2' key="2" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("2")}>''</button>});
        this.options.push({id:"3", option:",",selected:false,button:<button id='button3' key="3" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("3")}>,</button>});
        //Add option here
    }

    addDoubleQuotesAroundListElements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "1" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = '"'+this.manipulatedlistArray[run]+'"';
                newList.push(value);
                newListString = newListString+value;
            }
            this.manipulatedlistArray = newList;
            this.setState({
                manipulatedList : newListString,
            });
        }
    }

    addSingleQuotesAroundListElements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "2" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = "'"+this.manipulatedlistArray[run]+"'";
                newList.push(value);
                newListString = newListString+value;
            }
            this.manipulatedlistArray = newList;
            this.setState({
                manipulatedList : newListString,
            });
        }
    }

    addCommaBetweenListElements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "3" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = this.manipulatedlistArray[run]+",";
                newList.push(value);
                newListString = newListString+value;
            }
            var index=newListString.lastIndexOf(",");
            newListString=newListString.substring(0,index) 
            this.manipulatedlistArray = newList;
            this.setState({
                manipulatedList : newListString,
            });
        }
    }

    //Add option function

    manipulateList(){
        this.manipulatedlistArray = this.originalListArray;
        this.addDoubleQuotesAroundListElements();
        this.addSingleQuotesAroundListElements();
        this.addCommaBetweenListElements();
        //Call option function
    }

    resetManipulatedList(){
        this.manipulatedlistArray = [];
        this.setState({
            manipulatedList : "",
        });
    }

    reset(){
        this.originalListArray = [];
        this.setState({
            originalList : "",
        });
        this.resetManipulatedList();
    }

    demo(){
        var number = Math.floor((Math.random() * 100) + 1);
        this.originalListArray.push(number);
        var newString = "";
        if(this.state.originalList.length!==0)
            newString = this.state.originalList+"\n";
        this.setState({
            originalList : newString+number
        });
        if(this.options.filter(selectedOption => selectedOption.selected === true).length !== 0)
            this.manipulateList();
    }

    updateButtonProperties(thisOption){
        var option = this.options.find(option => option.id === thisOption);
        var optionIndex = this.options.findIndex(option => option.id === thisOption);
        if(option.selected){
            option.selected = false;
            $("#"+option.button.props.id).attr("class",this.notSelected);
        }else{
            option.selected = true;
            $("#"+option.button.props.id).attr("class",this.isSelected);
        }
        this.options[optionIndex] = option;
        this.setState(this.options);
        if(this.options.filter(selectedOption => selectedOption.selected === true).length !== 0)
            this.manipulateList();
        else
            this.resetManipulatedList();
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

    updateOriginalList(event) {
        event.preventDefault();
        this.setState({
            originalList : event.target.value,
        });
        if(this.state.originalList.length==0){
            var newArray = event.target.value.split("\n");
            this.originalListArray = newArray;
        }else{
            this.originalListArray = this.state.originalList.split("\n");
        }
        this.originalListArray = this.originalListArray.filter(function (el) {
            return el != "";
        });
        this.manipulateList();
    }

    render(){
        return <form className="row">
                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12">Original List</h4>
                        <textarea value={this.state.originalList} onChange={(event) => this.updateOriginalList(event)} className="form-control col-lg-12 col-md-12 col-sm-12" rows="20"></textarea>
                    </div>
                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12 mb-4">Options</h4>
                        {this.renderOptions()}
                        <div className="row mb-4"><div className="col text-center"><button type='button' className='btn btn-success' onClick={() => this.reset()}>RESET</button></div></div>
                        <div className="row mb-4"><div className="col text-center"><button type='button' className='btn btn-warning' onClick={() => this.demo()}>DEMO</button></div></div>
                    </div>
                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12">Result</h4>
                        <textarea value={this.state.manipulatedList} className="form-control col-lg-12 col-md-12 col-sm-12" rows="20" readOnly></textarea>
                    </div>
                </form>
    }
}

export default Manipulator;