var Header = require('./header');
var Highcharts = require('highcharts/highstock.js');
var nodata = require('highcharts/modules/no-data-to-display.js');
var $ = require('jquery');

var seriesOptions = [], seriesCounter = 0, names = [];
var location = window.location;
//var ip = location.split("/")[2];
console.log(location);

var AddStock = React.createClass({
    getInitialState: function(){
        return ({ticker: ""});
    },

    addStock: function(){
        console.log(names);
        if(this.state.ticker != "" && names.indexOf(this.state.ticker) < 0){
            names[names.length] =this.state.ticker;
            redrawChart();
        }
    },

    handleChange(event) {
        this.setState({ticker: (ReactDOM.findDOMNode(this.refs.ticker).value)});
    },

    render: function(){
        return (
            <div>
                <input type="text" onChange={this.handleChange.bind(this)} ref="ticker" name="input"></input>
                <button onClick={this.addStock}>Add</button>
            </div>
        )
    }
});

var App = React.createClass({
    getInitialState: function(){
        return {};
    },

    render: function() {
        return (
            <div>
                <Header />
                <div className="app-body">
                    <div className="flex-row">
                        <div id="container"></div>
                    </div>
                    <div className="flex-row">
                        <AddStock />
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <App />, document.getElementById('main')
);

function createChart(){
    Highcharts.stockChart('container', {
        rangeSelecter: {
            selected: 4
        },

        yAxis: {
            labels: {
                formatter: function(){
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },

            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }],
            
            showEmpty: true
        },

        xAxis: {
            showEmpty: true
        },

        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        },

        tooltip: {
            valueDecimals: 2,
            split: true
        },

        series: seriesOptions
    })
}

function redrawChart(){
    seriesCounter = 0;
    $.each(names, function(i, name){
        $.getJSON('http://'+location.host+'/get_data/'+name, function(data){
            seriesOptions[i] = {
                name: name,
                data: data
            };

            seriesCounter += 1;

            if(seriesCounter === names.length){
                createChart();
            }
        })
    })
}

createChart();