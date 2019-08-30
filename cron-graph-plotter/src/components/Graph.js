import React,{Component} from 'react';

class Graph extends Component{
    constructor(props){
        super(props);
        this.colorBase = [];
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
}

export default Graph;
