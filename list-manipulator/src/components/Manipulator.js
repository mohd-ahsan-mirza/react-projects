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
        this.options.push({id:"4", option:"(",selected:false,button:<button id='button4' key="4" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("4")}>(</button>});
        this.options.push({id:"5", option:")",selected:false,button:<button id='button5' key="5" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("5")}>)</button>});
        this.options.push({id:"6", option:"),",selected:false,button:<button id='button6' key="6" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("6")}>),</button>});
        this.options.push({id:"7", option:"00000+",selected:false,button:<button id='button7' key="7" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("7")}>00000+</button>});
        this.options.push({id:"8", option:"0000+",selected:false,button:<button id='button8' key="8" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("8")}>0000+</button>});
        this.options.push({id:"9", option:"000+",selected:false,button:<button id='button9' key="9" type='button' className={this.notSelected} onClick={() => this.updateButtonProperties("9")}>000+</button>});
        //Add option here
    }

    setManipulatedList(newList,newListString){
        this.manipulatedlistArray = newList;
        this.setState({
            manipulatedList : newListString,
        });
    }

    //TODO: Add options for multiple values in one line

    addDoubleQuotesAroundListElements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "1" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = '"'+this.manipulatedlistArray[run]+'"';
                newList.push(value);
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
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
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
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
                newListString = newListString+value+"\r\n";
            }
            var index=newListString.lastIndexOf(",");
            newListString=newListString.substring(0,index) 
            this.setManipulatedList(newList,newListString)
        }
    }

    addOpenParenthesinListELements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "4" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = "("+this.manipulatedlistArray[run];
                newList.push(value);
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
        }
    }

    addCloseParenthesinListELements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "5" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = this.manipulatedlistArray[run]+")";
                newList.push(value);
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
        }
    }

    addCloseParenthesAndCommaInListELements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "6" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = this.manipulatedlistArray[run]+"),";
                newList.push(value);
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
        }
    }

    appendFiveZerostoListElements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "7" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = "00000"+this.manipulatedlistArray[run];
                newList.push(value);
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
        }
    }

    appendFourZerostoListElements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "8" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = "0000"+this.manipulatedlistArray[run];
                newList.push(value);
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
        }
    }

    appendThreeZerostoListElements(){
        var newListString = "";
        var selectedOption = this.options.filter(selectedOption => selectedOption.id === "9" && selectedOption.selected === true);
        var newList = [];
        if(selectedOption.length!==0){
            for(var run=0;run<this.manipulatedlistArray.length;run++){
                var value = "000"+this.manipulatedlistArray[run];
                newList.push(value);
                newListString = newListString+value+"\r\n";
            }
            this.setManipulatedList(newList,newListString)
        }
    }

    //Add option function

    manipulateList(){
        this.manipulatedlistArray = this.originalListArray;
        this.appendFiveZerostoListElements();
        this.appendFourZerostoListElements();
        this.appendThreeZerostoListElements();
        this.addDoubleQuotesAroundListElements();
        this.addSingleQuotesAroundListElements();
        this.addCommaBetweenListElements();
        this.addOpenParenthesinListELements();
        this.addCloseParenthesinListELements();
        this.addCloseParenthesAndCommaInListELements();
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
                        <textarea value={this.state.originalList} onChange={(event) => this.updateOriginalList(event)} className="form-control col-lg-12 col-md-12 col-sm-12" rows="30"></textarea>
                    </div>
                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12 mb-4">Options</h4>
                        {this.renderOptions()}
                        <div className="row mb-4"><div className="col text-center"><button type='button' className='btn btn-success' onClick={() => this.reset()}>RESET</button></div></div>
                        <div className="row mb-4"><div className="col text-center"><button type='button' className='btn btn-warning' onClick={() => this.demo()}>DEMO</button></div></div>
                    </div>
                    <div className="form-group col-lg-4 col-md-4 col-sm-12">
                        <h4 className="text-center col-lg-12 col-md-12 col-sm-12">Result</h4>
                        <textarea value={this.state.manipulatedList} className="form-control col-lg-12 col-md-12 col-sm-12" rows="30" readOnly></textarea>
                    </div>
                </form>
    }
}

export default Manipulator;