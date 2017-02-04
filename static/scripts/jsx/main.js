var Header = require('./header');
var Highcharts = require('highcharts/highstock.js');
var $ = require('jquery');


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
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <App />, document.getElementById('main')
);

$(function () {

    $.getJSON('http://127.0.0.1:5000/get_data/GOOG', function (data) {
        // Create the chart
        Highcharts.stockChart('container', {


            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'GOOG Stock Price'
            },

            series: [{
                name: 'GOOG',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });

});