(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AddStock = React.createClass({displayName: "AddStock",
    getInitialState: function(){
        return ({ticker: ""});
    },

    addStock: function(){
        var context = this;
        if(this.state.ticker != "" && names.indexOf(this.state.ticker) < 0){
            names[names.length] = this.state.ticker;
            socket.emit('add', this.state.ticker);
            this.props.addTicker(this.state.ticker);
            redrawChart();
        }
    },

    handleChange(event) {
        this.setState({ticker: (ReactDOM.findDOMNode(this.refs.ticker).value)});
    },

    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", onChange: this.handleChange.bind(this), ref: "ticker", name: "input"}), 
                React.createElement("button", {onClick: this.addStock}, "Add")
            )
        )
    }
});

module.exports = AddStock;

},{}]},{},[1]);
