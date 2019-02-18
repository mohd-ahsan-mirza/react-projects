import React,{Component} from 'react';

class Resume extends Component{
    constructor(props){
        super(props);
        this.colorBase = [];
        this.integratedChartData = [];
        this.labels = [];
        this.values = [];
        this.colors = [];

    }
    addBaseColors(rgbValue){
        this.colorBase.push(rgbValue);
    }
    addChartData(dataObject){
        this.integratedChartData.push(dataObject);
        this.labels.push(dataObject.label);
        this.values.push(dataObject.value);
        this.colors.push(dataObject.color);
    }
    getLabels(){
        return this.labels;
    }
    getValues(){
        return this.values;
    }
    getColors(){
        return this.colors;
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
}

export default Resume;
